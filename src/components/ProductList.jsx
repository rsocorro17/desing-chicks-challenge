import ProductCard from './ProductCard';
import PropTypes from 'prop-types';

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      <div className="products-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      salePrice: PropTypes.number.isRequired,
      originalPrice: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ProductList;