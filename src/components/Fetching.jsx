import { useState } from "react";
import { useEffect } from "react";

export default function useImageURL()  {
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