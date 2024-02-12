import { lazy } from "react";

const Home = lazy(() => import("../Pages/Shared/home"));
const HowToBuyWholesale = lazy(() => import("../Pages/Shared/howToBuyWholeSale"));
const SellOnGinger = lazy(()=>import("../Pages/Shared/sellOnGinger"))
const SignUp = lazy(() => import("../Pages/Shared/SignUp"));
const Login = lazy(() => import("../Pages/Shared/Login"));
const Categories = lazy(()=>import("../Pages/Shared/Categories/Categories"))

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

  {
    path: "/categories/all",
    element: Categories,
  },
  {
    path: "/categories/hair",
    element: Categories,
  },
  {
    path: "/categories/nails",
    element: Categories,
  },
  {
    path: "/categories/eyelashes",
    element: Categories,
  },
  {
    path: "/categories/skin",
    element: Categories,
  },
  {
    path: "/categories/equipiment",
    element: Categories,
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
