import { lazy } from "react";
import { SellerAuthLayout } from "../Layouts";
import AccountLayout from "../Layouts/AccountLayout";
import AuthLayout from "../Layouts/AuthLayout";
import { SellerDashboardLayout } from "../Layouts/SellerDashboardLayout";

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
const RootCategory = lazy(() => import("../Pages/Shared/Categories"));
const PersonalInformation = lazy(() =>
  import("../Pages/Shared/Account/sections/personalInformation")
);
const OrderHistory = lazy(() =>
  import("../Pages/Shared/Account/sections/orderHistory")
);
const Security = lazy(() =>
  import("../Pages/Shared/Account/sections/security")
);
const Notification = lazy(() =>
  import("../Pages/Shared/Account/sections/notification")
);
const Support = lazy(() => import("../Pages/Shared/Account/sections/support"));
const OrderDetails = lazy(() =>
  import("../Pages/Shared/Account/sections/orderHistory/orderDetails")
);
const ReportOrder = lazy(() =>
  import("../Pages/Shared/Account/sections/orderHistory/reportOrder")
);
const Cart = lazy(() => import("../Pages/Shared/cart"));
const WishList = lazy(() => import("../Pages/Shared/wishList"));
const Checkout = lazy(() => import("../Pages/Shared/checkout/checkout"));
const Address = lazy(() => import("../Pages/Shared/checkout/address"));
const Payment = lazy(() => import("../Pages/Shared/checkout/payment"));
const SellerStore = lazy(() => import("../Pages/Shared/SellerStore"));

//seller Auth routes

// const SellerLogin = lazy(() => import('../Pages/Shared/SellerPages/SellerLogin'))
const SellerSignup = lazy(() =>
  import("../Pages/Shared/SellerPages/SellerSignUp")
);
const SellerForgotPassword = lazy(() =>
  import("../Pages/Shared/SellerPages/SellerForgotPassword")
);
const SellerSignUpPersonalInformation = lazy(() =>
  import("../Pages/Shared/SellerPages/SellerPersonalInformation")
);
const SellerSignUpBusinessInformation = lazy(() =>
  import("../Pages/Shared/SellerPages/SellerBusinessInformation")
);
const SellerSignUpBusinessDocument = lazy(() =>
  import("../Pages/Shared/SellerPages/SellerBusinessDocument")
);


//sellerpages
const SellerInventory = lazy(() =>
  import("../Pages/Private/Seller/Inventory/inventory")
);
const SellerCreateProduct = lazy(() =>
  import("../Pages/Private/Seller/Inventory/createNewProduct")
);
const SellerMessages = lazy(() =>
  import("../Pages/Private/Seller/Messages")
);

const ErrorPage = lazy(() => import("../Ui_elements/ErrorPage"));

export const sharedRoutes = [
  //auth routes
  {
    path: "/signup",
    element: () => (
      <AuthLayout>
        <SignUp />
      </AuthLayout>
    ),
    hasLayout: true,
  },
  {
    path: "/login",
    element: () => (
      <AuthLayout>
        <Login />
      </AuthLayout>
    ),
    hasLayout: true,
  },
  {
    path: "/forgot-password",
    element: () => (
      <AuthLayout noLayout={true}>
        <ForgotPassword />
      </AuthLayout>
    ),
    hasLayout: true,
  },

  //main app routes
  {
    path: "/",
    element: Home,
    hasLayout: false,
  },
  {
    path: "/*",
    element: ErrorPage,
    hasLayout: false,
  },

  {
    path: "/marketplace",
    element: MarketPlace,
    hasLayout: false,
  },
  {
    path: "/how-to-buy-wholesale",
    element: HowToBuyWholesale,
    hasLayout: false,
  },
  {
    path: "/sell-on-ginger",
    element: SellOnGinger,
    hasLayout: false,
  },

  {
    path: "/categories",
    element: RootCategory,
    hasLayout: false,
  },
  {
    path: "/categories/all",
    element: UnsignedCategories,
    hasLayout: false,
  },

  // {
  //   path: "/categories/:category",
  //   element: Categories,
  //   hasLayout: false,
  // },

  {
    path: "/categories/:categoryName",
    element: Categories,
    hasLayout: false,
  },

  {
    path: "/categories/:category/:id",
    element: ProductPage,
    hasLayout: false,
  },

  {
    path: "/report/:id",
    element: ReportOrder,
    hasLayout: false,
  },
  {
    path: "/cart",
    element: Cart,
    hasLayout: false,
  },
  {
    path: "/wish-list",
    element: WishList,
    hasLayout: false,
  },
  {
    path: "/cart/information",
    element: Checkout,
    hasLayout: false,
  },
  // {
  //   path: "/cart/information/address",
  //   element: Address,
  // },
  {
    path: "/cart/information/payment",
    element: Payment,
    hasLayout: false,
  },
  {
    path: "/store",
    element: SellerStore,
    hasLayout: false,
  },

  //account routes
  {
    path: "/account",
    element: () => (
      <AccountLayout>
        <AccountPage />
      </AccountLayout>
    ),
    hasLayout: false,
  },
  {
    path: "/account/personal-information",
    element: () => (
      <AccountLayout>
        <PersonalInformation />
      </AccountLayout>
    ),
    hasLayout: false,
  },
  {
    path: "/account/order-history",
    element: () => (
      <AccountLayout>
        <OrderHistory />
      </AccountLayout>
    ),
    hasLayout: false,
  },
  {
    path: "/account/order-history/:id",
    element: OrderDetails,
    hasLayout: false,
  },
  {
    path: "/account/support",
    element: () => (
      <AccountLayout>
        <Support />
      </AccountLayout>
    ),
    hasLayout: false,
  },
  {
    path: "/account/security",
    element: () => (
      <AccountLayout>
        <Security />
      </AccountLayout>
    ),
    hasLayout: false,
  },
  {
    path: "/account/notification",
    element: () => (
      <AccountLayout>
        <Notification />
      </AccountLayout>
    ),
    hasLayout: false,
  },

  //sellerAuth routes

  {
    path: "seller/signup",
    element: () => (
      <SellerAuthLayout>
        <SellerSignup />
      </SellerAuthLayout>
    ),
    hasLayout: true,
  },
  // {
  //   path: "seller/login",
  //   element: SellerLogin,
  //   hasLayout: true,
  // },
  {
    path: "seller/forgot-password",
    element: () => (
      <SellerAuthLayout>
        <SellerForgotPassword />
      </SellerAuthLayout>
    ),
    hasLayout: true,
  },
  {
    path: "seller/signup/personal_information",
    element: () => (
      <SellerAuthLayout>
        <SellerSignUpPersonalInformation />
      </SellerAuthLayout>
    ),
    hasLayout: true,
  },
  {
    path: "seller/signup/business_information",
    element: () => (
      <SellerAuthLayout>
        <SellerSignUpBusinessInformation />
      </SellerAuthLayout>
    ),
    hasLayout: true,
  },
  {
    path: "seller/signup/business_document",
    element: () => (
      <SellerAuthLayout>
        <SellerSignUpBusinessDocument />
      </SellerAuthLayout>
    ),
    hasLayout: true,
  },
  {
    path: "seller/dashboard",
    element: () => (
      <SellerDashboardLayout>
        <></>
      </SellerDashboardLayout>
    ),
    hasLayout: true,
  },
  {
    path: "seller/inventory",
    element: () => (
      <SellerDashboardLayout>
        <SellerInventory />
      </SellerDashboardLayout>
    ),
    hasLayout: true,
  },
  {
    path: "seller/inventory/create_product",
    element: () => (
      <SellerDashboardLayout>
        <SellerCreateProduct />
      </SellerDashboardLayout>
    ),
    hasLayout: true,
  },
  {
    path: "seller/order_history",
    element: () => (
      <SellerDashboardLayout>
        <></>
      </SellerDashboardLayout>
    ),
    hasLayout: true,
  },
  {
    path: "seller/messages",
    element: () => (
      <SellerDashboardLayout>
        <SellerMessages/>
      </SellerDashboardLayout>
    ),
    hasLayout: true,
  },
  {
    path: "seller/account",
    element: () => (
      <SellerDashboardLayout>
        <></>
      </SellerDashboardLayout>
    ),
    hasLayout: true,
  },
  {
    path: "seller/wallet",
    element: () => (
      <SellerDashboardLayout>
        <></>
      </SellerDashboardLayout>
    ),
    hasLayout: true,
  },
  {
    path: "seller/setting",
    element: () => (
      <SellerDashboardLayout>
        <></>
      </SellerDashboardLayout>
    ),
    hasLayout: true,
  },
];

// export const authRoutes = [
//   {
//     path: "/signup",
//     element: SignUp,
//     hasLayout: true,
//   },
//   {
//     path: "/login",
//     element: Login,
//     hasLayout: true,
//   },
//   {
//     path: "/forgot-password",
//     element: ForgotPassword,
//     hasLayout: false,
//   },
// ];

// export const sellerAuthRoutes = [
//   {
//     path: "seller/signup",
//     element: SellerSignup,
//     hasLayout: true,
//   },
//   // {
//   //   path: "seller/login",
//   //   element: SellerLogin,
//   //   hasLayout: true,
//   // },
//   {
//     path: "seller/forgot-password",
//     element: SellerForgotPassword,
//     hasLayout: true,
//   },
//   {
//     path: "seller/signup/personal_information",
//     element: SellerSignUpPersonalInformation,
//     hasLayout: true,
//   },
//   {
//     path: "seller/signup/business_information",
//     element: SellerSignUpBusinessInformation,
//     hasLayout: true,
//   },
//   {
//     path: "seller/signup/business_document",
//     element: SellerSignUpBusinessDocument,
//     hasLayout: true,
//   },
// ];

// export const accountRoutes = [
//   {
//     path: "/account",
//     element: AccountPage,
//   },
//   {
//     path: "/account/personal-information",
//     element: PersonalInformation,
//     hasLayout: true,
//   },
//   {
//     path: "/account/order-history",
//     element: OrderHistory,
//     hasLayout: true,
//   },
//   {
//     path: "/account/order/:id",
//     element: OrderDetails,
//     hasLayout: false,
//   },
//   {
//     path: "/account/support",
//     element: Support,
//     hasLayout: true,
//   },
//   {
//     path: "/account/security",
//     element: Security,
//     hasLayout: true,
//   },
//   {
//     path: "/account/notification",
//     element: Notification,
//     hasLayout: true,
//   },
// ];
