import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Sidebar from './Components/Sidebar.jsx'
import Mainmenu from './Components/Mainmenu.jsx'
import Bottombar from './Components/Bottombar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Sidebar />
    <Mainmenu />
    <Bottombar />
  </StrictMode>,
)
