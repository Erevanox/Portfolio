import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: 'src',
  base: './',
  plugins: [react()],
  publicDir: false,
  build: {
    outDir: '..',
    emptyOutDir: false,
    assetsInlineLimit: 10000000,
    rollupOptions: {
      output: {
        entryFileNames: 'script.js',
        assetFileNames: (assetInfo) =>
          assetInfo.name && assetInfo.name.endsWith('.css')
            ? 'style.css'
            : 'assets/[name][extname]'
      }
    }
  },
  server: {
    host: '0.0.0.0',
    port: 3000
  },
  preview: {
    host: '0.0.0.0',
    port: 4173
  }
});
