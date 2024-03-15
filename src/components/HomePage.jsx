import { Link } from 'react-router-dom';

function HomePage ({ onClick }) {

    return (
        <>
        <main className="homepage-main">
            <img src="./src/assets/homepage-bg-img.jpg" className="head-image" />
            <Link to="shopping" className="shop-btn">
                <button onClick={onClick}>Shop now</button>
            </Link>
        </main>
        </>
    )
}

export default HomePage;