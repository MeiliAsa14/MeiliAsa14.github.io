import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import BankComponent from './Bank.jsx' // Import the component as BankComponent (or 'Bank' for clarity)
import V from './V.jsx' 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BankComponent /> {/* Use the imported name here */}
    <V />
  </StrictMode>,
)
