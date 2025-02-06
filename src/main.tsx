import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './styles/theme.css';
import './styles/animations/zoom.css';
import './styles/animations/flyIn.css';
import './styles/animations/social-icons.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
