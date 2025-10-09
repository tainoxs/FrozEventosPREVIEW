import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import App from './pages/home/App.tsx';
import './index.css';

// Calcula basename a partir do BASE_URL do Vite de forma robusta
const basename = new URL(import.meta.env.BASE_URL || '/', window.location.origin)
  .pathname.replace(/\/$/, '');

// No GitHub Pages usamos HashRouter para evitar 404 e tela branca
const Router = import.meta.env.PROD ? HashRouter : BrowserRouter;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* Usa HashRouter em produção (GitHub Pages) para evitar problemas de rotas */}
    <Router basename={basename}>
      <App />
    </Router>
  </StrictMode>
);
