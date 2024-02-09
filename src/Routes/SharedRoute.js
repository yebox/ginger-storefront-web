import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "../Layouts";
import { routes } from "./data";

export const SharedRoutes = () => {
  return (
    <Routes>
      {routes.map(({ path, element: Element }, index) => (
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
      ))}
    </Routes>
  );
};
