import React from "react";
import { Routes } from "react-router-dom";
// import { accountRoutes } from "./data";

export const PrivateRoutes = () => {
  return (
    <Routes>
      {/* {accountRoutes.map(({ path, element: Element }, index) => (
        <Route
          key={index}
          path={path}
          element={
            <Suspense fallback={null}>
              <SharedLayout>
                <Element />
              </SharedLayout>
            </Suspense>
          }
        />
      ))} */}
    </Routes>
  );
};
