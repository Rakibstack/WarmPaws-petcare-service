import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './Routes/Router.jsx'
import Authprovider from './Component/Authprovider/Authprovider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Authprovider>
     <RouterProvider router={router}></RouterProvider>
   </Authprovider>
  </StrictMode>,
)
