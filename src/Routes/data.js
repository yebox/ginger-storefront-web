import { lazy } from "react";

const Home = lazy(() => import("../Pages/Shared/home"));
const MarketPlace = lazy(() => import("../Pages/Shared/MarketPlace"));
const HowToBuyWholesale = lazy(() =>
  import("../Pages/Shared/howToBuyWholeSale")
);
const SellOnGinger = lazy(() => import("../Pages/Shared/sellOnGinger"));
const SignUp = lazy(() => import("../Pages/Shared/SignUp"));
const Login = lazy(() => import("../Pages/Shared/Login"));
const ForgotPassword = lazy(() => import("../Pages/Shared/ForgotPassword"));

export const sharedRoutes = [
  {
    path: "/",
    element: Home,
  },
  {
    path: "/marketplace",
    element: MarketPlace,
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
