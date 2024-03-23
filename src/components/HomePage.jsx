import { Link } from 'react-router-dom';

function HomePage () {

    return (
        <>
        <main className="homepage-main">
            <img src="./src/assets/homepage-bg-img.jpg" className="head-image" />
            <Link to="shopping" className="shop-btn">
                <button>Shop now</button>
            </Link>
        </main>
        </>
    )
}

export default HomePage;
