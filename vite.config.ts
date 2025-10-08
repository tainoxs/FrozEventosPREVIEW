import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use repo base for GitHub Pages in production
  base: process.env.NODE_ENV === 'production' ? '/FrozEventosPREVIEW/' : '/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
