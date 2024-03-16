import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "../Layouts";
import { PageLoader } from "../Ui_elements";
import { sharedRoutes } from "./data";

export const SharedRoutes = () => {
  return (
    <Routes>
      {sharedRoutes.map(({ path, element: Element, hasLayout }, index) => (
        <Route
          key={index}
          path={path}
          element={
            <Suspense fallback={<PageLoader />}>
              {hasLayout ? (
                <Element />
              ) : (
                <SharedLayout>
                  <Element />
                </SharedLayout>
              )}
            </Suspense>
          }
        />
      ))}
    </Routes>
  );
};
