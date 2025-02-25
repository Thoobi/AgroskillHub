import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import LandingPage from "../pages/LandingPage";
import Waitlist from "../pages/Waitlist";

export const routes = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/join-waitlist",
        element: <Waitlist />,
      },
    ],
  },
]);
