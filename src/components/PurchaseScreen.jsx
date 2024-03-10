import { useEffect, useState } from "react";
import useImageURL from "./Fetching";
import { useParams } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function PurchaseScreen () {
    const { data, loading, error } = useImageURL();
    const { index } = useParams();
    const [product, setProduct] = useState(null);
    const [amount, setAmount] = useState(1);

    useEffect(() => {
        if (data && data[index]) {
            setProduct(data[index]);
        }
    }, [data, index]);


    const increaseProducts = () => {
        setAmount(e => e + 1);
    }

    const decreaseProducts = () => {
        setAmount(e => Math.max(e - 1, 1));
    }

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    if (!product) return null;

    return (
        <>
            <div className="img-info">
                <img src={product.image} className="purchase-card-img" />
                <p>{product.description}</p>
                <p>{Math.round(product.price * amount)}$</p>
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