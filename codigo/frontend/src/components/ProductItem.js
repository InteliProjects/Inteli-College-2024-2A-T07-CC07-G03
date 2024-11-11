import React from 'react';
import './ProductItem.css'; 

function ProductItem({ sku, name, description, price, onClick }) {
  return (
    <li className="product-item" onClick={onClick}>
      <h3 className="product-item-title">{name}</h3>
      <p className="product-item-description">{description}</p>
      <p className="product-item-price">Preço: R$ {price}</p>
    </li>
  );
}

export default ProductItem;
