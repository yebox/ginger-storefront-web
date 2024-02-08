import { lazy } from "react";

const Home = lazy(() => import("../Pages/Shared/home"));
const SignUp = lazy(() => import("../Pages/Shared/signUp"));

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
];
