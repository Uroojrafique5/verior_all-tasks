import React, { useState, useEffect } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  // 🔐 Get the secret key from .env
  const secretKey = import.meta.env.VITE_SECRET_KEY;

  // Show secret key in console on first load
  useEffect(() => {
    console.log("My Secret Key is:", secretKey);
  }, [secretKey]);

  // Load todos from localStorage
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(savedTodos);
  }, []);

  // Save todos to localStorage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (newTodo.trim() === '') return;
    const todo = { id: Date.now(), text: newTodo };
    setTodos([...todos, todo]);
    setNewTodo('');
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>📝Todo List</h1>

      <div style={styles.inputContainer}>
        <input
          style={styles.input}
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add new task..."
        />
        <button onClick={addTodo} style={styles.addButton}>Add</button>
      </div>

      <ul style={styles.todoList}>
        {todos.map((todo) => (
          <li key={todo.id} style={styles.todoItem}>
            <span>{todo.text}</span>
            <button onClick={() => deleteTodo(todo.id)} style={styles.deleteButton}>Delete</button>
          </li>
        ))}
      </ul>

      <p style={{ marginTop: '30px', fontSize: '14px', color: '#888' }}>
        Secret Key: <strong>{secretKey}</strong> {/* visible on UI for testing */}
      </p>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '500px',
    margin: '50px auto',
    padding: '30px',
    borderRadius: '15px',
    background: 'linear-gradient(135deg, #f0f4ff, #d0eaff)',
    boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
    fontFamily: 'Segoe UI, sans-serif',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '30px',
    color: '#333',
  },
  inputContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '10px',
  },
  input: {
    flex: 1,
    padding: '10px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  addButton: {
    padding: '10px 16px',
    borderRadius: '8px',
    backgroundColor: '#0077ff',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  },
  todoList: {
    marginTop: '20px',
    listStyle: 'none',
    paddingLeft: '0',
  },
  todoItem: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 15px',
    background: '#fff',
    borderRadius: '8px',
    marginBottom: '10px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  },
  deleteButton: {
    backgroundColor: '#ff4444',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    padding: '6px 10px',
    cursor: 'pointer',
  }
};

export default App;
