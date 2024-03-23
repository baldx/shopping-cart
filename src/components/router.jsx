import { RouterProvider, createBrowserRouter } from "react-router-dom"
import App from "../App";
import ShoppingPage from "./ShoppingPage";
import PurchaseScreen from "./PurchaseScreen";
import Cart from "./Cart";
import { useState } from "react";
import useImageURL from "./Fetching";
import { createContext } from "react";
import Development from "./Development";

export const Shop = createContext({});
  
const Router = () => {
    const [cartItems, setCartItems] = useState([]);
    const { data } = useImageURL();
    const [product, setProduct] = useState([]);
    const [showShop, setShowShop] = useState(false);
    
    const addToCart = (product, amount) => {
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
            element: <Cart cartItems={cartItems}/>
        },
        {
            path: "/development",
            element: <Development />
        }
    ])

    return (
    <Shop.Provider value={{cartItems, product, setProduct, addToCart, showShop, setShowShop}}>
        <RouterProvider router={router} />
    </Shop.Provider>
    
    )
}

export default Router;