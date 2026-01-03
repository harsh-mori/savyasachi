import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/base/index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Dispatch render event for prerendering
// This signals to vite-plugin-prerender that the app is ready to be captured
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    // Give React a moment to fully render before triggering the event
    setTimeout(() => {
      document.dispatchEvent(new Event('render-event'))
    }, 100)
  })
}
