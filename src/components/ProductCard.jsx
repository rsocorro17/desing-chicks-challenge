import PropTypes from 'prop-types';
import { useCart } from '../hooks/useCart'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle, faCartPlus, faCartArrowDown } from '@fortawesome/free-solid-svg-icons'

const ProductCard = ({ product }) => {

  const { addToCart, removeFromCart, cartItems } = useCart();

  const isInCart = cartItems.some(item => item.id === product.id);

  return (
    <div className="product-card">
      <div className="sale-tag">ON SALE</div>
      <div className="stock-info">In Stock</div>
      <img src={product.image} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p className="product-description">{product.description}</p>
      <div className="price">
        <span className="sale-price">${product.salePrice.toFixed(2)}</span>
        <span className="original-price">${product.originalPrice.toFixed(2)}</span>
      </div>
      <div className="quantity">Quantity: {product.quantity}</div>
      <div className="button-group">
        <button className="details-btn">
          <FontAwesomeIcon icon={faInfoCircle} /> Details
        </button>
        {isInCart ? (
          <button className="remove-btn" onClick={() => removeFromCart(product.id)}>
            <FontAwesomeIcon icon={faCartArrowDown} /> Remove
          </button>
        ) : (
          <button className="add-btn" onClick={() => addToCart(product)}>
            <FontAwesomeIcon icon={faCartPlus} /> Add
          </button>
        )}
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    salePrice: PropTypes.number.isRequired,
    originalPrice: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;