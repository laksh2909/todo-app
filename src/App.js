import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  // Initial todos state with default tasks
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Learn React Hooks',
      isCompleted: false,
      createdAt: new Date().toISOString(),
    },
    {
      id: 2,
      text: 'Build a Todo App',
      isCompleted: false,
      createdAt: new Date().toISOString(),
    },
    {
      id: 3,
      text: 'Deploy to GitHub Pages',
      isCompleted: false,
      createdAt: new Date().toISOString(),
    },
  ]);

  // Add new todo with unique ID and timestamp
  const addTodo = (text) => {
    if (!text.trim()) return;
    const newTodo = {
      id: Date.now(),
      text: text.trim(),
      isCompleted: false,
      createdAt: new Date().toISOString(),
    };
    setTodos([...todos, newTodo]);
  };

  // Toggle todo completion status
  const completeTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  // Remove todo by ID
  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="app">
      <h1>My React Todo App</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
      />
    </div>
  );
}

export default App;