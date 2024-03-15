import PropTypes from 'prop-types';

export default function Cart ({ cartItems }) {


    //fix hovering
    //link data coming from PurchaseScreen.jsx to here
    //display the items
    //use useState to check how many items with the PurchaseScreen button to purchase
    //for ever purchase increase the number of cart
    // finish project :)

    const logStuff = () => {
        console.log(cartItems + "cart.jsx");
    }

    return (
        <>            

            <main className="main-cart">
                <ul>
                    <button onClick={logStuff}>dsad</button>
                </ul>
            </main>
        </>
    )
}

Cart.propTypes = {
    cartItems: PropTypes.array
};