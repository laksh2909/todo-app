import React from 'react';

function TodoItem({ todo, index, completeTodo, removeTodo }) {
  return (
    <div
      className="todo-item"
      style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}
    >
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)} className="complete-button">
          {todo.isCompleted ? 'Undo' : 'Complete'}
        </button>
        <button onClick={() => removeTodo(index)} className="remove-button">
          x
        </button>
      </div>
    </div>
  );
}

export default TodoItem;