import React from 'react';
import useFetch from './hooks/useFetch';

function App() {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts');

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>📡 useFetch Custom Hook Example</h2>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      {data && data.slice(0, 5).map((post) => (
        <div key={post.id} style={styles.card}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

const styles = {
  card: {
    border: '1px solid #ccc',
    padding: '15px',
    marginBottom: '15px',
    borderRadius: '8px',
    background: '#f9f9f9',
  }
};

export default App;
