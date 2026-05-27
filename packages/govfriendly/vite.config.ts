import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// Base path is host-dependent. Resolution order:
//   1. VITE_BASE_PATH env var — explicit override (rarely needed)
//   2. CF_PAGES=1 — set automatically by Cloudflare Pages builds → "/"
//   3. Fallback — GitHub Pages project-page subpath
const base =
  process.env.VITE_BASE_PATH ??
  (process.env.CF_PAGES ? '/' : '/syscom-web/govfriendly/');

export default defineConfig({
  base,
  plugins: [react()],
  server: {
    port: 5174,
  },
  resolve: {
    alias: {
      '@shared': path.resolve(__dirname, '../shared/src'),
    },
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
});
   