import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Card ({ image }) {//FIX PROPTYPES WITH IMAGE
    return (
        <>
            <div className="card">
            <Link to="#" className="purchase-btn-link">
                <button className="purchase-btn">Purchase</button>
            </Link>
            <img src={image} className="card-img" />
            </div>
        </>
    )
}

export default Card;