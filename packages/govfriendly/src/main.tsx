import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Production builds are pre-rendered (scripts/prerender.mjs), so #root has
// real DOM already — use hydrateRoot to attach to it. In dev, #root is empty,
// so fall back to createRoot.
//
// CRITICAL: before calling hydrateRoot on a lazy route, we await the route's
// chunk. Without this, React 18 hits the React.lazy() throw during hydration,
// Suspense activates, and the prerendered subtree gets unmounted in favor of
// the Suspense fallback — which on lazy routes is `min-h-[60vh]`, causing
// the footer to shift back into the viewport and reintroducing the CLS we
// just spent #16 fixing. Awaiting the chunk first guarantees lazy() resolves
// synchronously during hydration, so React reuses the prerendered DOM.
//
// Keep this map in sync with the lazy() imports + <Route>s in App.tsx.
const ROUTE_PRELOAD: Record<string, () => Promise<unknown>> = {
  '/about':                              () => import('./pages/About'),
  '/services':                           () => import('./pages/Services'),
  '/products':                           () => import('./pages/Products'),
  '/contact':                            () => import('./pages/Contact'),
  '/careers':                            () => import('./pages/Careers'),
  '/platforms':                          () => import('./pages/platforms/PlatformsIndex'),
  '/platforms/tungsten-totalagility':    () => import('./pages/platforms/TungstenTotalAgility'),
  '/platforms/tungsten-capture':         () => import('./pages/platforms/TungstenCapture'),
  '/platforms/ibm-filenet':              () => import('./pages/platforms/IbmFileNet'),
  '/platforms/ibm-baw':                  () => import('./pages/platforms/IbmBaw'),
  '/platforms/ibm-datacap':              () => import('./pages/platforms/IbmDatacap'),
  '/platforms/hyland-onbase':            () => import('./pages/platforms/HylandOnBase'),
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
