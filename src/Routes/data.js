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
const Categories = lazy(() => import("../Pages/Shared/Categories/categories"));
const UnsignedCategories = lazy(()=>import("../Pages/Shared/Categories/unsignedCategories"));
//test
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

  {
    path: "/categories/all",
    element: UnsignedCategories,
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
