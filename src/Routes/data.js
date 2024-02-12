import { lazy } from "react";

const Home = lazy(() => import("../Pages/Shared/home"));
const HowToBuyWholesale = lazy(() => import("../Pages/Shared/howToBuyWholeSale"));
const SellOnGinger = lazy(()=>import("../Pages/Shared/sellOnGinger"))
const SignUp = lazy(() => import("../Pages/Shared/SignUp"));
const Login = lazy(() => import("../Pages/Shared/Login"));

export const sharedRoutes = [
  {
    path: "/",
    element: Home,
  },
  {
    path: "/how-to-buy-wholesale",
    element: HowToBuyWholesale,
  },
  {
    path: "/sell-on-ginger",
    element: SellOnGinger,
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
