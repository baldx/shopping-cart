import { useContext } from "react";
import { Link } from "react-router-dom";
import { Shop } from "./router";
import PropTypes from 'prop-types';
import cartLogo from '../../assets/cart-logo.png';
import cartIcon from '../../assets/cart.png';

export default function Header ({ goBack }) { 
    const { cartItems, setShowShop } = useContext(Shop);

    function AboutMe () {

        const scrollTo = (e) => {
            e.preventDefault();
            const targetElement = document.querySelector('footer');

            if (targetElement) targetElement.scrollIntoView({behavior: "smooth"});
        }
        
        return (
            <>
                <li><a href="#" onClick={scrollTo}>About us</a></li>
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
                <Link to="/" className="left-header">
                    <img src={cartLogo} />
                    <h1>Cartlify</h1>
                </Link>

                    <ul className="right-header">
                        {goBack ? GoBack() : AboutMe()}
                        <li>
                            <Link to="../cart" onClick={() => setShowShop(true)} className="cart-container">
                                Cart {cartItems.length}
                                <img src={cartIcon} className="cart" />
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