import { lazy } from "react";

const Home = lazy(() => import("../Pages/Shared/home"));
const SignUp = lazy(() => import("../Pages/Shared/SignUp"));
const Login = lazy(() => import("../Pages/Shared/Login"));

export const routes = [
  {
    path: "/",
    element: Home,
  },
];

export const authRoutes = [
  {
    path: "/signup",
    element: SignUp,
  },
  {
    path: "/login",
    element: Login,
  },
];
