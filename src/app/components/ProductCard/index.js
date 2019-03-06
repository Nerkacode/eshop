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
  cartCount,
  toggleFavorite,
  updateCartCount,
}) {
  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p>{name}</p>
      <p>
        {price}
        <span> {currency}</span>
      </p>
      <input
        type="number"
        min={0}
        onChange={e => updateCartCount(id, e.target.value)}
        value={cartCount}
      />
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
  cartCount: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    .isRequired,
  toggleFavorite: PropTypes.func.isRequired,
  updateCartCount: PropTypes.func.isRequired,
};

export default ProductCard;
