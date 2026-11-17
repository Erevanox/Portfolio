import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: 'src',
  base: '/Portfolio/', // Must have leading and trailing slashes, matching exact repo capitalization
  plugins: [react()],
  publicDir: false,
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    assetsInlineLimit: 0,
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
  }
});
