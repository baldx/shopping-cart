import { Link } from 'react-router-dom';

function HomePage () {

    return (
        <>
            <img src="./src/assets/homepage-bg-img.jpg" className="head-image" />
            <Link to="shopping" className="shop-btn">
                <button>Shop now</button>
            </Link>
        </>
    )
}

export default HomePage;