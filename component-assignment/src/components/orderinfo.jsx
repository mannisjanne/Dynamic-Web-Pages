// components/OrderInfo.js

import React from 'react';

const OrderInfo = ({ productName, quantity, totalPrice }) => {
  return (
    <div className="order-info">
      <h2>Order info</h2>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{productName}</td>
            <td>{quantity}</td>
            <td>{totalPrice}€</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default OrderInfo;
