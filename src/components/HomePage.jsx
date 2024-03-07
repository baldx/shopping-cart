import { useEffect, useState } from "react"

function HomePage () {
    const [mainImg, setMainImg] = useState('');

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{
                console.log(json)
                setMainImg(json[1].image)
            })


    }, []);

    return (
        <>
            <img src={mainImg} className="head-image" />
        </>
    )
}

export default HomePage;