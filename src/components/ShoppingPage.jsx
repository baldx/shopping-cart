import Header from "./Header";
import Card from "./Card";

function ShoppingPage () {

    function createCards () {
        let result = [];
        for (let index = 0; index < 10; index++) {
            result.push(<Card />)
        }
        return result
    }

    return (
        <>
        <Header />

        <main className="shopping-main">
            {createCards()}
        </main>
        </>
    )
}

export default ShoppingPage;