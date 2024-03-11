import Header from "./Header";

export default function Cart () {

    //fix hovering
    //link data coming from PurchaseScreen.jsx to here
    //display the items
    //use useState to check how many items with the PurchaseScreen button to purchase
    //for ever purchase increase the number of cart
    // finish project :)

    return (
        <>
            <Header goBack={true}/>
            

            <main className="main-cart">
                <ul>
                    <li>
                        <img src={""} />
                        <div className="cart-title">{"title"}</div>
                        <div className="cart-price">{"price"}</div>
                        <div className="cart-amount">{"amount"}</div>
                    </li>
                </ul>
            </main>
        </>
    )
}