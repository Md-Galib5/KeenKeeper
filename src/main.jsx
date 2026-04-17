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
import Details from './pages/detailspage/Details.jsx';
import Card from './components/shared/Card.jsx';
import FriendCard from './components/shared/FriendCard.jsx';
import FriendContext from './context/FriendContext.jsx';
import { ToastContainer } from 'react-toastify';
import ErrorPage from './pages/errorpage/ErrorPage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Homepage />
      },
      {
        path: "/card",
        element: <FriendCard />
      },
      {
        path: "/timeline",
        element: <Timeline />
      },
      {
        path: "/statspage",
        element: <Statspage />
      },
      {
        path: "/details/:id",
        element: <Details />
      }
    ],
    errorElement: <ErrorPage></ErrorPage>

  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FriendContext>
       <RouterProvider router={router} />
    </FriendContext>

     <ToastContainer position="top-center" />
  </StrictMode>,
)
