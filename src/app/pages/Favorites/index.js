import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import { ProductCard } from '../../components';

function Favorites({ products, toggleFavorite }) {
  return (
    <div className="favoriteProducts">
      {products.map(product => (
        <ProductCard
          key={product.id}
          {...product}
          toggleFavorite={toggleFavorite}
        />
      ))}
    </div>
  );
}

Favorites.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      isFavorite: PropTypes.bool.isRequired,
    })
  ),
  toggleFavorite: PropTypes.func.isRequired,
};

Favorites.defaultProps = {
  products: [],
};

export default Favorites;
