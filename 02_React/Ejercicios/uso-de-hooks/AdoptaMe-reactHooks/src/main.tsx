import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App.tsx'
import { GlobalProvider } from './context/AppContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalProvider>
        <App />
    </GlobalProvider>
  </StrictMode>,
)
