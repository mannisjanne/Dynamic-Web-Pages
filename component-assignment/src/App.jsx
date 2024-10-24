import React, { useState } from 'react';
import './App.css';

import Header from './components/header.jsx';
import ProductForm from './components/productform.jsx';
import OrderInfo from './components/orderinfo.jsx';
import logo from './assets/product-logo.png';

const App = () => {
  const [products] = useState([
    { name: 'AMD Ryzen 5 3600', price: 245 }
  ]);

  const [selectedProductIndex, setSelectedProductIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const handleProductChange = (index) => {
    setSelectedProductIndex(index);
    setQuantity(1);
  };

  const handleQuantityChange = (amount) => {
    setQuantity((prevQuantity) => Math.max(prevQuantity + amount, 0));
  };

  const selectedProduct = products[selectedProductIndex];
  const totalPrice = selectedProduct.price * quantity;

  return (
    <div className="App">
      <Header image={logo} title="Welcome to product page!" />
      <ProductForm
        products={products}
        selectedProductIndex={selectedProductIndex}
        quantity={quantity}
        onProductChange={handleProductChange}
        onQuantityChange={handleQuantityChange}
      />
      <OrderInfo
        productName={selectedProduct.name}
        quantity={quantity}
        totalPrice={totalPrice}
      />
    </div>
  );
};

export default App;