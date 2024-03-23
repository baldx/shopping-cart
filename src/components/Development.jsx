import { useContext } from "react";
import Header from "./Header";
import { Shop } from "./router";

export default function Development () {
    const { showShop } = useContext(Shop);


    return (
        <>
            <Header goBack={showShop}/>
            <p className="development-message">App under construction, return a later date</p>
        </>
    )
}