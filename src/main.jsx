import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../src/global.css';
import Home from './pages/Home/home';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
  </StrictMode>
)
