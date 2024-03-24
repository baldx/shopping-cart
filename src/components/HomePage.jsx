import { Link } from 'react-router-dom';
import shoppingBackground from '../../assets/homepage-bg-img.jpg'

function HomePage () {

    return (
        <>
        <main className="homepage-main">
            <img src={shoppingBackground} className="head-image" />
            <Link to="shopping" className="shop-btn">
                <button>Shop now</button>
            </Link>
        </main>
        </>
    )
}

export default HomePage;
