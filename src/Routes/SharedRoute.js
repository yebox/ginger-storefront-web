import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "../Layouts";
import { PageLoader } from "../Ui_elements";
import { sharedRoutes } from "./data";

export const SharedRoutes = () => {
  return (
    <Routes>
      {sharedRoutes.map(({ path, element: Element }, index) => (
        <Route
          key={index}
          path={path}
          element={
            <Suspense fallback={<PageLoader/>}>
              <SharedLayout>
                <Element />
              </SharedLayout>
            </Suspense>
          }
        />
      ))}
    </Routes>
  );
};
