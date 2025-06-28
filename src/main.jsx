import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App';
import 'aos/dist/aos.css';
import Aos from 'aos'
Aos.init()
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App></App>
  </StrictMode>,
)
