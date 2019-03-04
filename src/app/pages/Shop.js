import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

function Shop({ products }) {
  return (
    <div className="products">
      {products.map(product => (
        <div className="productCard" key={product.id}>
          <img src={product.image} alt={product.name} />
          <p>{product.name}</p>
          <p>
            {product.price}
            <span> {product.currency}</span>
          </p>
          <button type="button" onClick={() => console.log('add to chart')}>
            <span role="img" aria-label="close">
              👜
            </span>
          </button>
          <button type="button" onClick={() => console.log('like product')}>
            <span role="img" aria-label="close">
              👍
            </span>
          </button>
        </div>
      ))}
    </div>
  );
}

Shop.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ),
};

Shop.defaultProps = {
  products: [],
};

export default Shop;
