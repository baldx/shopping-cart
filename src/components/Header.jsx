import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header ({ goBack }) { //ADD PROP HERE LATER
    const [search, setSearch] = useState('');

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
                        <li><input type="text" name="search" id="search" placeholder="Search here..." value={search} onChange={event => setSearch(event.target.value)} /></li>
                        <li>
                            <Link to="../cart" className="cart-container">
                                Cart
                                <img src="./src/assets/cart.png" className="cart" />
                            </Link>
                        </li>
                    </ul>
            </header>


        </>
    )
}