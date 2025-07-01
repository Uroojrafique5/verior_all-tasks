import React, { useReducer, useState, useCallback } from 'react';

const initialState = [];

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, { id: Date.now(), text: action.payload }];
    case 'DELETE':
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
};

const TodoItem = React.memo(({ todo, onDelete }) => {
  return (
    <li style={styles.todoItem}>
      {todo.text}
      <button onClick={() => onDelete(todo.id)} style={styles.deleteBtn}>❌</button>
    </li>
  );
});

function App() {
  const [todos, dispatch] = useReducer(reducer, initialState);
  const [input, setInput] = useState('');

  const handleDelete = useCallback((id) => {
    dispatch({ type: 'DELETE', payload: id });
  }, []);

  const handleAdd = () => {
    if (input.trim()) {
      dispatch({ type: 'ADD', payload: input });
      setInput('');
    }
  };

  return (
    <div style={styles.container}>
      <h2>📝 Todo List with useReducer</h2>
      <div>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter task..."
          style={styles.input}
        />
        <button onClick={handleAdd} style={styles.addBtn}>Add</button>
      </div>

      <ul style={styles.todoList}>
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} onDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    padding: '30px',
    fontFamily: 'sans-serif',
    maxWidth: '500px',
    margin: 'auto',
  },
  input: {
    padding: '8px',
    width: '65%',
    marginRight: '8px',
  },
  addBtn: {
    padding: '8px 12px',
    background: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  todoList: {
    listStyle: 'none',
    padding: 0,
    marginTop: '20px',
  },
  todoItem: {
    display: 'flex',
    justifyContent: 'space-between',
    background: '#f2f2f2',
    padding: '10px',
    marginBottom: '8px',
    borderRadius: '6px',
  },
  deleteBtn: {
    background: '#dc3545',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    padding: '4px 8px',
    cursor: 'pointer',
  },
};

export default App;
