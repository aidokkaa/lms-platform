import { UserProvider } from './context/UserContext.tsx';
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
   <UserProvider>
     <App />
   </UserProvider>
</BrowserRouter>
)
