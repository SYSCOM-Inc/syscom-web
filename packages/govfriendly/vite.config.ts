import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// Base path is host-dependent:
//   - GitHub Pages: served at /ClaudeSYSCOMwebsite/govfriendly/ (default below)
//   - Cloudflare Pages: served at site root, so build with VITE_BASE_PATH=/
export default defineConfig({
  base: process.env.VITE_BASE_PATH ?? '/ClaudeSYSCOMwebsite/govfriendly/',
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
   