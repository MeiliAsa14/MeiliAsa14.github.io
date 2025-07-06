import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Bank from './Bank.jsx'
import V from './V.jsx' 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Bank />
    <V />
  </StrictMode>,
)
