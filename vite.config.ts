import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
      '/api/wordware': {
        target: 'https://app.wordware.ai',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/wordware/, ''),
        headers: {
          'Origin': 'https://app.wordware.ai'
        }
      }
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
  }
});