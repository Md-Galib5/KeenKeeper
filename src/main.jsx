import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from "react-router";
import Homepage from './pages/homepage/Homepage.jsx';
import Timeline from './pages/timeline/Timeline.jsx';
import Statspage from './pages/statspage/Statspage.jsx';
import Layout from './pages/layout/Layout.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    //element: <h2>Homepage</h2>
    element: <Layout />,
    children: [
      {
        path:"/",
        element:<h2>Aishy</h2>
      },
      {
        path:"/homepage",
        element: <Homepage />
      },
      {
        path: "/timeline",
        element: <Timeline />
      },
      {
        path: "/statspage",
        element: <Statspage />
      }
    ],
    errorElement:<h2>404 Not Found</h2>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
