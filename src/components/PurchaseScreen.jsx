import { useState } from "react";
import Header from "./Header";

// eslint-disable-next-line react/prop-types
function PurchaseScreen ({ addToCart, product }) {
    const [amount, setAmount] = useState(1);

    const increaseProducts = () => {
        setAmount(e => e + 1);
    }

    const decreaseProducts = () => {
        setAmount(e => Math.max(e - 1, 1));
    }

    const handlePurchase = () => {
        console.log(typeof addToCart); 
        addToCart("hello")
    }

    return (
        <>
            <Header goBack={true}/>
            <main className="purchase-main">
                <img src={product} className="purchase-card-img" />

                <div className="product-actions">
                    <div className="top">
                        <p className="product-title">{product}</p>
                        <p className="description">{product}</p>
                        <p className="price">{Math.round(product * amount)}$</p>
                    </div>

                    <div className="bottom">
                        <button className="increase" onClick={increaseProducts}>+</button>
                        <div className="amount">{amount}</div>
                        <button className="decrease" onClick={decreaseProducts}>-</button>
                        <button className="purchase" onClick={handlePurchase}>Purchase</button>
                    </div>
                </div>
            </main>
        </>
    )

    
}

export default PurchaseScreen;