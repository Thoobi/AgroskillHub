import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import LandingPage from "../pages/LandingPage";
import Waitlist from "../pages/Waitlist";
import SignUp from "../pages/SignUp";
import CommunityLanding from "../pages/CommunityLanding";
import Courses from "../pages/Courses";
import Terms from "../pages/Terms";
import Privacy from "../pages/PrivacyPolicy";
import CReview from "../pages/CReview";
import { ResumeProvider } from "../context/resumeContext";

export const routes = createBrowserRouter([
  {
    element: (
      <ResumeProvider>
        <Layout />
      </ResumeProvider>
    ),
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/join-waitlist",
        element: <Waitlist />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/community",
        element: <CommunityLanding />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/courses",
        element: <Courses />,
      },
      {
        path: "/terms",
        element: <Terms />,
      },
      {
        path: "/privacy",
        element: <Privacy />,
      },
      {
        path: "/review",
        element: <CReview />,
      },
    ],
  },
]);
