import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Production builds are pre-rendered (scripts/prerender.mjs), so #root has
// real DOM already — use hydrateRoot to attach to it. In dev, #root is empty,
// so fall back to createRoot.
//
// Before calling hydrateRoot on a still-lazy route, await its chunk. Without
// this, React 18 hits the React.lazy() throw during hydration, Suspense
// activates, and the prerendered subtree gets unmounted in favor of the
// `min-h-[60vh]` fallback — the same footer-shift CLS we fixed in #16, just
// reintroduced on lazy routes. Platform pages and Home are now eager
// (see App.tsx) so they don't appear in this map; only routes that are
// still lazy AND have prerendered HTML need preloading.
//
// Keep this map in sync with the lazy() imports + <Route>s in App.tsx.
const ROUTE_PRELOAD: Record<string, () => Promise<unknown>> = {
  '/about':     () => import('./pages/About'),
  '/services':  () => import('./pages/Services'),
  '/products':  () => import('./pages/Products'),
  '/contact':   () => import('./pages/Contact'),
  '/careers':   () => import('./pages/Careers'),
  '/platforms': () => import('./pages/platforms/PlatformsIndex'),
};

const root = document.getElementById('root')!;
const tree = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function boot() {
  if (root.hasChildNodes()) ReactDOM.hydrateRoot(root, tree);
  else ReactDOM.createRoot(root).render(tree);
}

// Strip the Vite base path + any trailing slash, normalize "" -> "/"
const base = import.meta.env.BASE_URL.replace(/\/$/, '');
const raw = window.location.pathname.startsWith(base) ? window.location.pathname.slice(base.length) : window.location.pathname;
const currentPath = raw.replace(/\/$/, '') || '/';
const preload = ROUTE_PRELOAD[currentPath];

// Only gate hydration on chunk preload when we actually have prerendered DOM
// to protect. createRoot paths (dev mode, unknown routes via 404.html) boot
// immediately so React can render the fallback / NotFound without delay.
if (root.hasChildNodes() && preload) preload().then(boot, boot);
else boot();
