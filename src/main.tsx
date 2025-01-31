import { ToastContainer } from 'react-toastify'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import  AuthContextProvider  from './Context/AuthContext/AuthContext.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    
    <ToastContainer/>
    <AuthContextProvider>
    <App />
    </AuthContextProvider>
  </StrictMode>,
)
