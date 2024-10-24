// components/ProductForm.js

import React from 'react';

const ProductForm = ({ products, selectedProductIndex, quantity, onProductChange, onQuantityChange }) => {
  return (
    <div className="product-form">
      <h2>Select product</h2>
      <div className="form-group">
        <label>Product:</label>
        <select 
          value={selectedProductIndex} 
          onChange={(e) => onProductChange(Number(e.target.value))}
        >
          {products.map((product, index) => (
            <option key={index} value={index}>
              {product.name} ({product.price}€)
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label>Quantity:</label>
        <button onClick={() => onQuantityChange(-1)}>-</button>
        <span className="quantity">{quantity}</span>
        <button onClick={() => onQuantityChange(1)}>+</button>
      </div>
    </div>
  );
}

export default ProductForm;
