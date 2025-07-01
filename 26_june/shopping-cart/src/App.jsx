import React, { useState } from 'react';
import { products } from './data/products';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (index) => {
    const newCart = [...cartItems];
    newCart.splice(index, 1);
    setCartItems(newCart);
  };

  return (
    <div style={styles.container}>
      <h1>🛒 Simple Shopping Cart</h1>
      <div style={styles.sections}>
        <ProductList products={products} addToCart={addToCart} />
        <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '30px',
    fontFamily: 'Arial',
  },
  sections: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '40px',
  },
};

export default App;
