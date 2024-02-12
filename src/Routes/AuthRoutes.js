import React from "react";
import { authRoutes } from "./data";
import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import AuthLayout from "../Layouts/AuthLayout";

export const AuthRoutes = () => {
  return (
    <Routes>
      {authRoutes.map(({ path, hasLayout, element: Element }, index) => (
        <Route
          key={index}
          path={path}
          element={
            <Suspense fallback={null}>
              {hasLayout ? (
                <AuthLayout>
                  <Element />
                </AuthLayout>
              ) : (
                <Element />
              )}
            </Suspense>
          }
        />
      ))}
    </Routes>
  );
};
