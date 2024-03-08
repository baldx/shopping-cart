import Header from "./Header";
import Card from "./Card";
import { useEffect, useState } from "react";

const useImageURL = () => {
    const [images, setImages] = useState([]);
    const [error, setError] = useState(null); 
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let mounted = true;

        fetch('https://fakestoreapi.com/products', {mode: "cors"})
            .then(response => {
                if (response.status >= 400 || !response.ok) throw new Error("server Error");
                return response.json()
            })
            .then(json => {
                if (mounted) {
                    const imageURLs = json.map(product => product.image);
                    setImages(prevImages => [...prevImages, ...imageURLs]);
                }
            })
            .catch(error => {
                if (mounted) {
                    setError(error)
                }
            })
            .finally(() => setLoading(false))

        return () => {
            mounted = false;
        };
    }, []);

    return { images, error, loading };
}

function ShoppingPage () {

    const { images, error, loading } = useImageURL();

    if (error) return <p>A network error was encountered</p> //adds error during error
    if (loading) return <p>Loading...</p> //adds loading during loading

    function createCards () {
        let result = [];
        for (let index = 0; index < images.length; index++) {
            result.push(<Card image={images[index]} key={index}/>)
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