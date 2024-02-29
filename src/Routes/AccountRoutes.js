import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { accountRoutes } from "./data";
import AccountLayout from "../Layouts/AccountLayout";

export const AccountRoutes = () => {
  return (
    <Routes>
      {accountRoutes.map(({ path, hasLayout, element: Element }, index) => (
        <Route
          key={index}
          path={path}
          element={
            <Suspense fallback={null}>
              {hasLayout ? (
                <AccountLayout>
                  <Element />
                </AccountLayout>
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
