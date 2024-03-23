import { useContext } from "react";
import { Link } from "react-router-dom";
import { Shop } from "./router";
import PropTypes from 'prop-types';


export default function Header ({ goBack }) { 
    const { cartItems, setShowShop } = useContext(Shop);

    function AboutMe () {
        return (
            <>
                <li><a href="#">About us</a></li>
            </>
        )
    }

    function GoBack() {
        return (
            <>
                <li><Link to="../shopping">Shopping</Link></li>
            </>
        )
    }

    return (
        <>
            <header>
                <div className="left-header">
                    <img src="./src/assets/cart-logo.png" />
                    <h1>Cartlify</h1>
                </div>

                    <ul className="right-header">
                        {goBack ? GoBack() : AboutMe()}
                        <li>
                            <Link to="../cart" onClick={() => setShowShop(true)} className="cart-container">
                                Cart {cartItems.length}
                                <img src="./src/assets/cart.png" className="cart" />
                            </Link>
                        </li>
                    </ul>
            </header>


        </>
    )
}

Header.propTypes = {
    goBack: PropTypes.bool
}