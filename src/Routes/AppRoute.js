import React from "react";
import { SharedRoutes } from "./SharedRoute";
import { AuthRoutes } from "./AuthRoutes";
import { SellerAuthRoutes } from "./SellerAuthRoutes";
import ScrollToTop from "../Utils/scrollToTop";

// import { SellerDashboardLayout } from "../Layouts/SellerDashboardLayout";

export const AppRoute = () => {
  return (
    <>
      <ScrollToTop />
      <SharedRoutes />
      <AuthRoutes />
      <SellerAuthRoutes />
    </>

    // <SellerDashboardLayout/>
  );
};
