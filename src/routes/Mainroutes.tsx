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
import AuthLayout from "../components/layout/AuthLayout";
import { ResumeProvider } from "../context/resumeContext";
import { AuthProvider } from "../context/AuthContext";
import AuthVerification from "../pages/AuthVerification";
import Login from "../pages/Login";
import PasswordReset from "../pages/PasswordReset";
import PasswordResetVerify from "../pages/PasswordResetVerify";

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
        path: "/community",
        element: <CommunityLanding />,
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
  {
    element: (
      <AuthProvider>
        <AuthLayout />
      </AuthProvider>
    ),
    children: [
      {
        path: "auth/signup",
        element: <SignUp />,
      },
      {
        path: "auth/login",
        element: <Login />,
      },
      {
        path: "auth/activation/",
        element: <AuthVerification />,
      },
      {
        path: "reset-password",
        element: <PasswordReset />,
      },
      {
        path: "password-update/",
        element: <PasswordReset />,
      },
      {
        path: "auth/reset-password/",
        element: <PasswordResetVerify />,
      },
    ],
  },
]);
