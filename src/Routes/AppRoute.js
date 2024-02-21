import React from "react";
import { AuthRoutes, PrivateRoutes, SharedRoutes } from ".";
import ScrollToTop from "../Utils/scrollToTop";

export const AppRoute = () => {
  return (
    <>
      <ScrollToTop />
      <SharedRoutes />
      <AuthRoutes />
      <PrivateRoutes />
    </>
  );
};
