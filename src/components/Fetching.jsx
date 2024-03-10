import { useState } from "react";
import { useEffect } from "react";

export default function useImageURL()  {
    const [images, setImages] = useState([]);
    const [error, setError] = useState(null); 
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState('');

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
                    setData(json)
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

    return { images, error, loading, data };
}