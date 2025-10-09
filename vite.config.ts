import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  // Use repo base for GitHub Pages when building in production
  base: mode === 'production' ? '/FrozEventosPREVIEW/' : '/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
}));
