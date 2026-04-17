
import { createBrowserRouter } from "react-router";
import Layout from "../pages/layout/Layout.jsx";
import ErrorPage from "../pages/errorpage/ErrorPage.jsx";
import Homepage from "../pages/homepage/Homepage.jsx";
import FriendCard from "../components/shared/FriendCard.jsx";
import Timeline from "../pages/timeline/Timeline.jsx";
import Statspage from "../pages/statspage/Statspage.jsx";
import Details from "../pages/detailspage/Details.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Homepage />
      },
      {
        path: "card",
        element: <FriendCard />
      },
      {
        path: "timeline",
        element: <Timeline />
      },
      {
        path: "stats",
        element: <Statspage />
      },
      {
        path: "details/:id",
        element: <Details />
      }
    ]
  }
]);