import { RouterProvider, createBrowserRouter } from "react-router-dom"
import App from "../App";
import ShoppingPage from "./ShoppingPage";

const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
        },
        {
            path: "shopping",
            element: <ShoppingPage />
        }
    ])

    return <RouterProvider router={router} />;
}

export default Router;