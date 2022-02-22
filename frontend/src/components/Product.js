import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '../components/Rating';

const Product = ({ product }) => {
  return (
    <div className="card my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
        <img src={product.image} className="card-img-top" />
      </Link>
      <div className="card-body">
        <Link to={`/product/${product._id}`}>
          <h5 className="card-title">
            <strong>{product.name}</strong>
          </h5>
        </Link>
        <p className="card-text">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </p>
        <h3 className="card-text">${product.price}</h3>
      </div>
    </div>
  );
};

export default Product;
