import React from "react";
import {
  AuthRoutes,
  PrivateRoutes,
  SharedRoutes,
  AccountRoutes,
  SellerAuthRoutes,
} from ".";
import ScrollToTop from "../Utils/scrollToTop";

// import { SellerDashboardLayout } from "../Layouts/SellerDashboardLayout";

export const AppRoute = () => {
  return (
    <>
      <ScrollToTop />
      <SharedRoutes />
      <AuthRoutes />
      <PrivateRoutes />
      <AccountRoutes />
      <SellerAuthRoutes />
    </>

    // <SellerDashboardLayout/>
  );
};
