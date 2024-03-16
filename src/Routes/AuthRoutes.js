import React from "react";
import { authRoutes } from "./data";
import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import AuthLayout from "../Layouts/AuthLayout";
import { PageLoader } from "../Ui_elements";

export const AuthRoutes = () => {
  return (
    <></>
    // <Routes>
    //   {authRoutes.map(({ path, hasLayout, element: Element }, index) => (
    //     <Route
    //       key={index}
    //       path={path}
    //       element={
    //         <Suspense fallback={<PageLoader/>}>
    //           {hasLayout ? (
    //             <AuthLayout>
    //               <Element />
    //             </AuthLayout>
    //           ) : (
    //             <Element />
    //           )}
    //         </Suspense>
    //       }
    //     />
    //   ))}
    // </Routes>
  );
};
