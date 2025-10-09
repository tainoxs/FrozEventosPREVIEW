import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './pages/home/App.tsx';
import './index.css';

// Calcula basename a partir do BASE_URL do Vite de forma robusta
const basename = new URL(import.meta.env.BASE_URL, window.location.origin)
  .pathname.replace(/\/$/, '');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* Usa basename robusto para suportar subpath do GitHub Pages */}
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </StrictMode>
);
