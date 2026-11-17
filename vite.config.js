import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: 'src',
  base: '/Portfolio/',
  plugins: [react()],
  publicDir: '../Assets',
  build: {
    outDir: '../dist',
    emptyOutDir: true
  }
});
