import { lazy, Suspense } from "react"
import { Routes, Route } from "react-router-dom"
import { SharedLayout } from "../Layouts"

const Home = lazy(
    ()=> import("../Pages/Shared/home")
)


export const SharedRoutes = () => {

    const routes = [
        {
            path: "/",
            element: <Home/>
        }
    ]

    return (
        <Routes>
            {
                routes.map((route, index) =>
                    <Route
                        key={index}
                        path={route.path}
                        element={
                            <SharedLayout>
                                <Suspense fallback={null}>
                                    {route.element}
                                </Suspense>
                            </SharedLayout>
                        }
                    />)
            }
        </Routes>
    )
}