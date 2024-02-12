import { lazy } from "react";

const Home = lazy(() => import("../Pages/Shared/home"));
const MarketPlace = lazy(() => import("../Pages/Shared/MarketPlace"));
const SignUp = lazy(() => import("../Pages/Shared/SignUp"));
const Login = lazy(() => import("../Pages/Shared/Login"));
const ForgotPassword = lazy(() => import("../Pages/Shared/ForgotPassword"));

export const routes = [
  {
    path: "/",
    element: Home,
  },
  {
    path: "/marketplace",
    element: MarketPlace,
  },
];

export const authRoutes = [
  {
    path: "/signup",
    element: SignUp,
    hasLayout: true,
  },
  {
    path: "/login",
    element: Login,
    hasLayout: true,
  },
  {
    path: "/forgot-password",
    element: ForgotPassword,
    hasLayout: false,
  },
];
