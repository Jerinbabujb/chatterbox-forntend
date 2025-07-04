import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from '../context/AuthContext';
import { chatProvider } from '../context/ChatContext.jsx';


createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <AuthProvider>
  //   <App />
  //   </AuthProvider>
  // </StrictMode>,
    <StrictMode>
      
    <AuthProvider>
      <chatProvider>
    <App />
    </chatProvider>
    </AuthProvider>
  </StrictMode>,
)
