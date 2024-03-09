import { RouterProvider, createBrowserRouter } from "react-router-dom"
import App from "../App";
import ShoppingPage from "./ShoppingPage";
import PurchaseScreen from "./PurchaseScreen";

const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
        },
        {
            path: "shopping",
            element: <ShoppingPage />,
        },
        { 
            path: "shopping/purchase", 
            element: <PurchaseScreen /> 
        },
    ])

    return <RouterProvider router={router} />;
}

export default Router;