import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { useTexture } from "@react-three/drei"
import './index.css'
import App from './App.tsx'

useTexture.preload("/backgroundMountains.jpg");
useTexture.preload("/villagebg.jpg");

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
