import { useContext, useEffect, useState } from "react";
import Header from "./Header";
import PropTypes from 'prop-types';
import { useParams } from "react-router-dom";
import { Shop } from "./router";
import useImageURL from "./Fetching";



// eslint-disable-next-line react/prop-types
function PurchaseScreen ({ addToCart, data }) {
    const [amount, setAmount] = useState(1);
    const { index } = useParams();
    const { setProduct, product } = useContext(Shop);
    const {loading, error} = useImageURL();

    useEffect(() => {
        if (data && data[index]) {
            setProduct(data[index])
        }
    }, [data, index, setProduct]);

    if (loading) return <p>Loading...</p>
    if (error) return <p>{error + "ERROR"}</p>;
    if (!product) return <p>product not found</p>

    const increaseProducts = () => {
        setAmount(e => e + 1);
    }

    const decreaseProducts = () => {
        setAmount(e => Math.max(e - 1, 1));
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
                        <button className="purchase" onClick={() => addToCart(product, amount)}>Purchase</button>
                    </div>
                </div>
            </main>
        </>
    )
    
}

export default PurchaseScreen;

PurchaseScreen.propTypes = {
    product: PropTypes.array,
    addToCart: PropTypes.func
}