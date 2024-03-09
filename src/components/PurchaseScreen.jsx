import { useState } from "react";
import useImageURL from "./Fetching";

// eslint-disable-next-line react/prop-types
function PurchaseScreen () {
    const { images } = useImageURL();
    const [amount, setAmount] = useState(1);

    const increaseProducts = () => {
        setAmount(e => e + 1);
    }

    const decreaseProducts = () => {
        setAmount(e => e - 1);
    }


    return (
        <>
            <div className="img-info">
                <img src={"product.image"} className="purchase-card-img" />
                <p>{"product.description"}</p>
                <p>{"product.price"}</p>
            </div>

            <button className="increase" onClick={increaseProducts}>+</button>
            <div className="amount">{amount}</div>
            <button className="decrease" onClick={decreaseProducts}>-</button>
        </>
    )

    
}

export default PurchaseScreen;

/*
    Pseudocode to make the purchase screen:

    * Onclick get the data of which product. (Maybe through index in the array)
    *
*/