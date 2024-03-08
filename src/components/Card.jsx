import { Link } from "react-router-dom";

function Card () {
    return (
        <>
            <div className="card">
            <Link to="#" className="purchase-btn-link">
                <button className="purchase-btn">Purchase</button>
            </Link>
            <img src="./src/assets/homepage-bg-img.jpg" className="card-img" />
            </div>
        </>
    )
}

export default Card;