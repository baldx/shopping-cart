import { useState } from "react";

export default function Header () {
    const [search, setSearch] = useState('');

    return (
        <>
            <header>
                <div className="left-header">
                    <img src="./src/assets/cart-logo.png" />
                    <h1>Cartlify</h1>
                </div>

                    <ul className="right-header">
                        <li><a href="#">About us</a></li>
                        <li><input type="text" name="search" id="search" placeholder="Search here..." value={search} onChange={event => setSearch(event.target.value)} /></li>
                        <li>
                            <a href="#" className="cart-container">
                                Cart
                                <img src="./src/assets/cart.png" className="cart" />
                            </a>
                        </li>
                    </ul>
            </header>


        </>
    )
}