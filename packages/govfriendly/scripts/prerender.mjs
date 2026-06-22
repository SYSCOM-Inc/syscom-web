// Build-time pre-rendering for the SPA.
//
// Why: <Seo> uses useEffect to inject <title>/meta/canonical/JSON-LD at
// runtime. Crawlers that don't execute JS see an empty shell. SSR via
// renderToString won't run useEffect either — so we render the production
// build in real headless Chrome (where useEffect runs), then snapshot the
// HTML per route. Zero changes to <Seo>, App, or any page.
//
// Flow:
//   1. Read dist/index.html into memory as the SPA shell (used as the
//      fallback while we're crawling, before we overwrite it for /).
//   2. Start an inline HTTP server over dist/, falling back to that shell
//      for any HTML request that doesn't match a real file. Mirrors what
//      Cloudflare's _redirects does in production.
//   3. Parse routes from src/App.tsx (same source the sitemap script uses).
//   4. For each route, launch headless Chrome, navigate, wait for
//      networkidle0 + a small grace for the lazy chunk + <Seo> useEffect,
//      snapshot the document HTML.
//   5. Write each snapshot to dist/<route>/index.html. Persist the original
//      empty shell as dist/spa-shell.html (referenced by _redirects so
//      truly-unknown routes don't accidentally hydrate against the
//      prerendered Home).
//
// Runs after vite build + sitemap + pagefind, as the final build step.

import { fileURLToPath } from 'node:url';
import { createServer } from 'node:http';
import path from 'node:path';
import fs from 'node:fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');
const APP_FILE = path.join(ROOT, 'src', 'App.tsx');

// --- Discover routes from App.tsx (same parser as generate-sitemap.mjs) ---
const appSrc = fs.readFileSync(APP_FILE, 'utf8');
const routes = [];
for (const m of appSrc.matchAll(/<Route\s+path=["']([^"']+)["']/g)) {
  const p = m[1];
  if (p === '*' || p.includes(':')) continue;
  routes.push(p);
}
routes.sort();
console.log(`[prerender] discovered ${routes.length} routes:`, routes.join(', '));

// --- Snapshot the original empty SPA shell BEFORE we touch dist/ ---
const SHELL_PATH = path.join(DIST, 'index.html');
const shellHtml = fs.readFileSync(SHELL_PATH, 'utf8');
// Persist as 404.html so Cloudflare Pages serves it for unknown routes with a
// real 404 status. React Router then renders <NotFound /> for the actual URL.
// This avoids the soft-404 a `/* /index.html 200` rewrite would produce.
fs.writeFileSync(path.join(DIST, '404.html'), shellHtml);

// Detect the Vite base path from the shell's first asset reference. Cloudflare
// prod sets CF_PAGES=1 so base = "/"; the GH Pages fallback build uses
// "/syscom-web/govfriendly/". Either way, all asset/route URLs in the shell
// (and at runtime via BrowserRouter `basename={import.meta.env.BASE_URL}`)
// are prefixed with this — Puppeteer must navigate through it.
const baseMatch = shellHtml.match(/(?:src|href)="(\/[^"]*?)assets\//);
const BASE = baseMatch ? baseMatch[1] : '/';
console.log(`[prerender] detected base path: ${BASE}`);

// --- Inline static server that mirrors the SPA fallback semantics ---
const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js':   'application/javascript; charset=utf-8',
  '.css':  'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg':  'image/svg+xml',
  '.png':  'image/png',
  '.webp': 'image/webp',
  '.woff2':'font/woff2',
  '.ico':  'image/x-icon',
  '.xml':  'application/xml; charset=utf-8',
  '.txt':  'text/plain; charset=utf-8',
};
const server = createServer((req, res) => {
  const url = new URL(req.url, 'http://localhost');
  let decoded = decodeURIComponent(url.pathname);
  // Strip the base path prefix so file lookups in dist/ work for both
  // base="/" (Cloudflare) and base="/syscom-web/govfriendly/" (GH Pages).
  if (BASE !== '/' && decoded.startsWith(BASE)) decoded = '/' + decoded.slice(BASE.length);
  else if (BASE !== '/' && decoded + '/' === BASE) decoded = '/';
  const tryPaths = [
    path.join(DIST, decoded),
    path.join(DIST, decoded, 'index.html'),
  ];
  for (const p of tryPaths) {
    if (fs.existsSync(p) && fs.statSync(p).isFile()) {
      const ext = path.extname(p);
      res.setHeader('Content-Type', MIME[ext] || 'application/octet-stream');
      res.end(fs.readFileSync(p));
      return;
    }
  }
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.end(shellHtml);
});
const PORT = 4197;
await new Promise((r) => server.listen(PORT, '127.0.0.1', r));

// --- Headless Chrome crawl ---
const { default: puppeteer } = await import('puppeteer');
const browser = await puppeteer.launch({
  // 'shell' is the legacy headless implementation — more reliable on Windows
  // dev machines where the new headless mode has spurious "already running"
  // launch failures. CI on Linux works either way.
  headless: 'shell',
  args: ['--no-sandbox', '--disable-gpu', '--disable-dev-shm-usage'],
});

let warnings = 0;
try {
  for (const route of routes) {
    // Navigate through the base path so BrowserRouter (basename=BASE) matches.
    const navPath = BASE === '/' ? route : (BASE.replace(/\/$/, '') + route);
    const url = `http://127.0.0.1:${PORT}${navPath}`;
    const page = await browser.newPage();
    page.on('pageerror', (err) => { console.warn(`[prerender] pageerror on ${route}:`, err.message); warnings++; });
    try {
      await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
      // Hard wait: React must have rendered into #root AND <Seo>'s useEffect
      // must have committed (canonical href reflects this route). networkidle0
      // alone fires before useEffect runs in some scenarios, leaving the
      // snapshot as the empty shell.
      await page.waitForFunction(
        (expectedPath) => {
          const root = document.getElementById('root');
          if (!root || root.childElementCount === 0) return false;
          const canonical = document.querySelector('link[rel="canonical"]');
          if (!canonical) return false;
          // canonical should end with this route's path
          const href = canonical.getAttribute('href') || '';
          const want = expectedPath === '/' ? '/' : expectedPath;
          return href.endsWith(want) || href.endsWith(want + '/');
        },
        { timeout: 15000 },
        route
      );
      // Brief settle for any remaining effects (LinkedIn icon, etc.)
      await new Promise((r) => setTimeout(r, 200));
      const title = await page.title();
      const html = '<!doctype html>\n' + await page.evaluate(() => document.documentElement.outerHTML);
      // Compute output path. "/" -> dist/index.html; "/about" -> dist/about/index.html, etc.
      const outDir = route === '/' ? DIST : path.join(DIST, route.replace(/^\//, ''));
      fs.mkdirSync(outDir, { recursive: true });
      fs.writeFileSync(path.join(outDir, 'index.html'), html);
      const titleStr = title.length > 60 ? title.slice(0, 57) + '…' : title;
      console.log(`[prerender]   ${route.padEnd(40)} -> ${titleStr}`);
    } catch (e) {
      console.error(`[prerender] FAILED on ${route}:`, e.message);
      warnings++;
    } finally {
      await page.close();
    }
  }
} finally {
  await browser.close();
  server.close();
}

console.log(`[prerender] done. ${routes.length} routes, ${warnings} warnings.`);
if (warnings > 0) process.exit(1);
