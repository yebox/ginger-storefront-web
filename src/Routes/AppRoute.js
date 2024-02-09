import React from "react";
import { SharedRoutes } from "./SharedRoute";
import { AuthRoutes } from "./AuthRoutes";

export const AppRoute = () => {
  return (
    <>
      <SharedRoutes />
      <AuthRoutes />
    </>
  );
};
