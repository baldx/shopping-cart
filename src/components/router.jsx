import { RouterProvider, createBrowserRouter } from "react-router-dom"
import App from "../App";
import ShoppingPage from "./ShoppingPage";
import PurchaseScreen from "./PurchaseScreen";
import Cart from "./Cart";

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
            path: "shopping/purchase/:index", 
            element: <PurchaseScreen /> 
        },
        {
            path: "cart",
            element: <Cart />
        }
    ])

    return <RouterProvider router={router} />;
}

export default Router;