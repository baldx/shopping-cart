import PropTypes from 'prop-types';
import Header from './Header';
import { useContext } from 'react';
import { Shop } from './router';
import { Link } from 'react-router-dom';


export default function Cart ({ cartItems }) {
    const { showShop } = useContext(Shop);

    //fix hovering
    //link data coming from PurchaseScreen.jsx to here
    //display the items
    //use useState to check how many items with the PurchaseScreen button to purchase
    //for ever purchase increase the number of cart
    // finish project :)

    function CartValidation (length) {
        if (length === 0) {
            return (
                <>
                    <Header goBack={showShop}/>
                    <p className="warning-order">Place your first order <Link to="/shopping">here</Link>!</p>
                </>
            )
        } else return (
            <>
                <Header goBack={showShop}/>
                <main className="main-cart">
                    <ul>
                        {cartItems.map((item, index) => (
                            <li className="item-info" key={index}>
                                <img className="cart-img" src={item.product.image} />
                                <div className="item-info-text">
                                    <div className="item-info-text-child">{item.product.title}</div>
                                    <div className="item-info-text-child">Amount: {item.amount}</div>
                                    <div className="item-info-text-child">${Math.round(item.amount * item.product.price)}</div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <Link to="/development">
                        <button className="checkout">Checkout</button>
                    </Link>
                </main>
            </>
        )
    }

    return (
        <>            
            {CartValidation(cartItems.length)}
        </>
    )
}

Cart.propTypes = {
    cartItems: PropTypes.array
};