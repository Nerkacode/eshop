import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

function ProductCard({
  image,
  name,
  price,
  currency,
  id,
  isFavorite,
  toggleFavorite,
}) {
  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p>{name}</p>
      <p>
        {price}
        <span> {currency}</span>
      </p>
      <button type="button" onClick={() => console.log('Add to cart')}>
        <span role="img" aria-label="close">
          👜
        </span>
      </button>
      <button type="button" onClick={() => toggleFavorite(id)}>
        <span role="img" aria-label="close">
          {isFavorite ? '👍' : '👎'}
        </span>
      </button>
    </div>
  );
}

ProductCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  toggleFavorite: PropTypes.func.isRequired,
};

export default ProductCard;
