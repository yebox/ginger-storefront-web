import React from "react";
import { authRoutes } from "./data";
import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import AuthLayout from "../Layouts/AuthLayout";

export const AuthRoutes = () => {
  return (
    <Routes>
      {authRoutes.map(({ path, element: Element }, index) => (
        <Route
          key={index}
          path={path}
          element={
            <Suspense fallback={null}>
              <AuthLayout>
                <Element />
              </AuthLayout>
            </Suspense>
          }
        />
      ))}
    </Routes>
  );
};
