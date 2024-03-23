import { RouterProvider, createBrowserRouter } from "react-router-dom"
import App from "../App";
import ShoppingPage from "./ShoppingPage";
import PurchaseScreen from "./PurchaseScreen";
import Cart from "./Cart";
import { useState } from "react";
import useImageURL from "./Fetching";
import { createContext } from "react";

export const Shop = createContext({});
  
const Router = () => {
    const [cartItems, setCartItems] = useState([]);
    const { data } = useImageURL();
    const [product, setProduct] = useState([]);
    
    const addToCart = (product, amount) => {
        console.log(product, amount, "adding to cart");
        setCartItems([...cartItems, { product, amount }]);
    }
    
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
        },
        {
            path: "/shopping",
            element: <ShoppingPage />,
        },
        { 
            path: "/shopping/purchase/:index", 
            element: <PurchaseScreen  data={data} addToCart={addToCart}/> 
        },
        {
            path: "/cart",
            element: <Cart />
        }
    ])

    return (
    <Shop.Provider value={{cartItems, product, setProduct, addToCart}}>
        <RouterProvider router={router} />
    </Shop.Provider>
    
    )
}

export default Router;