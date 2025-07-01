import React from 'react';

function Cart({ cartItems, removeFromCart }) {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2>🛒 Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} - Rs {item.price}
              <button onClick={() => removeFromCart(index)} style={{ marginLeft: "10px" }}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: Rs {total}</h3>
    </div>
  );
}

export default Cart;
