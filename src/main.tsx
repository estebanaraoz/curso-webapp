import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'
import ScrollToTop from './components/ScrollToTop'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <BrowserRouter basename="/curso-webapp/">
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </StrictMode>,
)
