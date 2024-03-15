import { useEffect, useState } from "react";
import useImageURL from "./Fetching";
import { useParams } from "react-router-dom";
import Header from "./Header";


// eslint-disable-next-line react/prop-types
function PurchaseScreen ({ addToCart }) {
    const { data, loading, error } = useImageURL();
    const { index } = useParams();
    const [product, setProduct] = useState(null);
    const [amount, setAmount] = useState(1);

    useEffect(() => {
        if (data && data[index]) {
            setProduct(data[index]);
        }
    }, [data, index]); //try moving useEffect to app.jsx, to parent component and see if it works. use useState to link between the 2 components


    const increaseProducts = () => {
        setAmount(e => e + 1);
    }

    const decreaseProducts = () => {
        setAmount(e => Math.max(e - 1, 1));
    }

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    if (!product) return null;

    const handlePurchase = () => {
        addToCart = [product, amount]
        console.log(addToCart, "purchaseScreen.jsx");
        return addToCart
    }

    return (
        <>
            <Header goBack={true}/>
            <main className="purchase-main">
                <img src={product.image} className="purchase-card-img" />

                <div className="product-actions">
                    <div className="top">
                        <p className="product-title">{product.title}</p>
                        <p className="description">{product.description}</p>
                        <p className="price">{Math.round(product.price * amount)}$</p>
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