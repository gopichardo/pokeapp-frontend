import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { PokeaApp } from './components/PokeaApp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PokeaApp />
  </StrictMode>,
)
