import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


function Card ({ image, index }) {

    return (
        <>
            <div className="card">
            <Link to={`/shopping/purchase/${index}`} className="purchase-btn-link">
                <button className="purchase-btn" data-index={index}>Purchase</button>
            </Link>
            <img src={image} className="card-img"  alt={`Product ${index}`} />
            </div>
        </>
    )
}

export default Card;

Card.propTypes = {
    image: PropTypes.string,
    index: PropTypes.number
}