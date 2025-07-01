import React from 'react';

function ProductList({ products, addToCart }) {
  return (
    <div>
      <h2>🛍️ Products</h2>
      {products.map((item) => (
        <div key={item.id} style={styles.card}>
          <h3>{item.name}</h3>
          <p>Rs {item.price}</p>
          <button onClick={() => addToCart(item)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

const styles = {
  card: {
    border: '1px solid #ddd',
    padding: '15px',
    margin: '10px 0',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9'
  }
};

export default ProductList;
