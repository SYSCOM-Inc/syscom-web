// Auto-generates dist/sitemap.xml from the route tree in src/App.tsx.
//
// Why: the sitemap used to be a hand-maintained public/sitemap.xml that drifted
// every time a route (e.g. a new platform page) was added. This scans the actual
// <Route> declarations so the sitemap can never fall out of sync with the app.
//
// lastmod: the git commit date of each route's page source file (YYYY-MM-DD).
// Falls back to the file mtime, then today, so it still works in a shallow CI
// checkout (where all files share one commit) — see fetch-depth: 0 in deploy.yml
// for accurate per-page dates on GitHub Pages builds.
//
// Runs after `vite build` (writes straight into dist/), so the deployed artifact
// always carries a current sitemap with zero manual upkeep.

import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import fs from 'node:fs';
import path from 'node:path';

const SITE_URL = 'https://syscom.com';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const appPath = path.join(root, 'src', 'App.tsx');
const distPath = path.join(root, 'dist', 'sitemap.xml');

// Per-path SEO hints. Routes not listed fall back to the defaults — so a new
// page still lands in the sitemap correctly even if no one updates this map.
const DEFAULT = { changefreq: 'monthly', priority: '0.7' };
const HINTS = {
  '/': { changefreq: 'monthly', priority: '1.0' },
  '/services': { changefreq: 'monthly', priority: '0.9' },
  '/products': { changefreq: 'monthly', priority: '0.9' },
  '/platforms/tungsten-totalagility': { changefreq: 'monthly', priority: '0.9' },
  '/about': { changefreq: 'monthly', priority: '0.8' },
  '/platforms': { changefreq: 'monthly', priority: '0.8' },
  '/contact': { changefreq: 'yearly', priority: '0.8' },
  '/careers': { changefreq: 'monthly', priority: '0.6' },
};

const app = fs.readFileSync(appPath, 'utf8');

// component name -> imported module path, e.g. Home -> ./pages/Home
const importMap = {};
for (const m of app.matchAll(/const\s+(\w+)\s*=\s*lazy\(\(\)\s*=>\s*import\(['"]([^'"]+)['"]\)\)/g)) {
  importMap[m[1]] = m[2];
}

// route path -> component name, from <Route path="..." element={<Name .../>} />
const routes = [];
for (const m of app.matchAll(/<Route\s+path=["']([^"']+)["'][^>]*element=\{<(\w+)/g)) {
  const [, routePath, component] = m;
  if (routePath === '*' || routePath.includes(':')) continue; // skip 404 + dynamic
  routes.push({ routePath, component });
}

function resolvePageFile(component) {
  const mod = importMap[component];
  if (!mod) return null;
  const base = path.join(root, 'src', mod.replace(/^\.\//, ''));
  for (const ext of ['.tsx', '.ts', '/index.tsx']) {
    if (fs.existsSync(base + ext)) return base + ext;
  }
  return null;
}

function lastmod(file) {
  if (file) {
    try {
      const out = execFileSync('git', ['log', '-1', '--format=%cs', '--', file], {
        cwd: root,
        encoding: 'utf8',
      }).trim();
      if (out) return out; // YYYY-MM-DD
    } catch {
      /* git unavailable — fall through */
    }
    try {
      return fs.statSync(file).mtime.toISOString().slice(0, 10);
    } catch {
      /* fall through */
    }
  }
  return new Date().toISOString().slice(0, 10);
}

const entries = routes
  .map(({ routePath, component }) => {
    const hint = HINTS[routePath] ?? DEFAULT;
    return {
      loc: `${SITE_URL}${routePath === '/' ? '/' : routePath}`,
      lastmod: lastmod(resolvePageFile(component)),
      ...hint,
    };
  })
  // Stable, readable order: shallow paths first, then alphabetical.
  .sort((a, b) => a.loc.localeCompare(b.loc));

const xml =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  entries
    .map(
      (e) =>
        `  <url><loc>${e.loc}</loc><lastmod>${e.lastmod}</lastmod>` +
        `<changefreq>${e.changefreq}</changefreq><priority>${e.priority}</priority></url>`
    )
    .join('\n') +
  `\n</urlset>\n`;

fs.mkdirSync(path.dirname(distPath), { recursive: true });
fs.writeFileSync(distPath, xml);
console.log(`[sitemap] wrote ${entries.length} routes -> ${distPath}`);
