import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  // Caminhos relativos no build para funcionar em qualquer subpath do GitHub Pages
  base: mode === 'production' ? './' : '/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
}));
