import React from 'react';
import PropTypes from 'prop-types';
import { ProductsContainer } from '../../components';
import './index.scss';

function Cart({ products }) {
  const total = products.reduce((result, product) => {
    return result + product.price * product.cartCount;
  }, 0);

  return (
    <ProductsContainer className="Cart">
      {products.map(({ id, name, price, cartCount, image }) => {
        return (
          <div key={id} className="Cart-item">
            <div>
              <img src={image} alt={name} />
              <span>{name}</span>
            </div>
            <div>{price}</div>
            <div>{cartCount}</div>
            <div>{cartCount * price}</div>
          </div>
        );
      })}
      <div className="Cart-total">{`total: ${total}`}</div>
    </ProductsContainer>
  );
}

Cart.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      cartCount: PropTypes.string.isRequired,
    })
  ),
};

Cart.defaultProps = {
  products: [],
};

export default Cart;
