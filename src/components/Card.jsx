import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Card ({ image, index }) {//FIX PROPTYPES WITH IMAGE & onClick

    return (
        <>
            <div className="card">
            <Link to="purchase" className="purchase-btn-link">
                <button className="purchase-btn">Purchase</button>
            </Link>
            <img src={image} className="card-img"  alt={`Product ${index}`} />
            </div>
        </>
    )
}

export default Card;