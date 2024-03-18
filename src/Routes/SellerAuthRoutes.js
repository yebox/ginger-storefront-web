import React from "react";
import { sellerAuthRoutes } from "./data";
import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import { SellerAuthLayout } from "../Layouts";
import { PageLoader } from "../Ui_elements";

export const SellerAuthRoutes = () => {
  return (
    <></>
    // <Routes>
    //   {sellerAuthRoutes.map(({ path, hasLayout, element: Element }, index) => (
    //     <Route
    //       key={index}
    //       path={path}
    //       element={
    //         <Suspense fallback={<PageLoader/>}>
    //           {hasLayout ? (
    //             <SellerAuthLayout>
    //               <Element />
    //             </SellerAuthLayout>
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
