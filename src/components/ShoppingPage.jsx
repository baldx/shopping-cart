import Header from "./Header";
import useImageURL from "./Fetching";
import Card from "./Card";
import Footer from "./Footer";

function ShoppingPage () {

    const { images, error, loading } = useImageURL();

    if (error) return <p>A network error was encountered, {error}</p> 
    if (loading) return <p>Loading...</p>

    function createCards () {
        let result = [];
        for (let index = 0; index < images.length; index++) {
            result.push(<Card image={images[index]} key={index} index={index} />)
        }
        return result
    }

    return (
        <>
        <Header />

        <main className="shopping-main">
        {createCards()}
        </main>
        <Footer />
        </>
    );
}

export default ShoppingPage;