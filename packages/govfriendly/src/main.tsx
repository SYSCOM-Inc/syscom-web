import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Production builds are pre-rendered (scripts/prerender.mjs), so #root has
// real DOM already — use hydrateRoot to attach to it. In dev, #root is empty,
// so fall back to createRoot. Hydration over the prerendered tree avoids any
// destructive re-mount that would re-trigger CLS on lazy routes.
const root = document.getElementById('root')!;
const tree = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
if (root.hasChildNodes()) ReactDOM.hydrateRoot(root, tree);
else ReactDOM.createRoot(root).render(tree);
