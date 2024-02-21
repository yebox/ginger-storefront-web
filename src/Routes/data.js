import { lazy } from "react";

const Home = lazy(() => import("../Pages/Shared/home"));
const MarketPlace = lazy(() => import("../Pages/Shared/marketPlace"));
const HowToBuyWholesale = lazy(() =>
  import("../Pages/Shared/howToBuyWholeSale")
);
const SellOnGinger = lazy(() => import("../Pages/Shared/sellOnGinger"));
const SignUp = lazy(() => import("../Pages/Shared/SignUp"));
const Login = lazy(() => import("../Pages/Shared/Login"));
const ForgotPassword = lazy(() => import("../Pages/Shared/ForgotPassword"));
const Categories = lazy(() => import("../Pages/Shared/Categories/Categories"));
const ProductPage = lazy(() => import("../Pages/Shared/ProductPage"));
const AccountPage = lazy(() => import("../Pages/Shared/Account"));
const UnsignedCategories = lazy(() =>
  import("../Pages/Shared/Categories/unsignedCategories")
);
const PersonalInformation = lazy(() =>
  import("../Pages/Shared/Account/sections/personalInformation")
);
const OrderHistory = lazy(() =>
  import("../Pages/Shared/Account/sections/orderHistory")
);
const OrderDetails = lazy(() =>
  import("../Pages/Shared/Account/sections/orderHistory/orderDetails")
);
const ReportOrder = lazy(() =>
  import("../Pages/Shared/Account/sections/orderHistory/reportOrder")
);

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
    path: "/categories/equipment",
    element: Categories,
  },
  {
    path: "/product/:id",
    element: ProductPage,
  },
  {
    path: "/account",
    element: AccountPage,
  },
  {
    path: "/account/order/:id",
    element: OrderDetails,
  },
  {
    path: "/report/:id",
    element: ReportOrder,
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

export const accountRoutes = [
  {
    path: "/account",
    element: AccountPage,
  },
  {
    path: "/account/personal-information",
    element: PersonalInformation,
  },
  {
    path: "/account/order-history",
    element: OrderHistory,
  },
];
