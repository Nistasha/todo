// TodoItem.js
import React from 'react';

function TodoItem({ todo, onDelete }) {
  return (
    <li>
      {/* Display the text of the todo */}
      {todo.text} 
      {/* Button to delete the todo */}
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </li>
  );
}

export default TodoItem;
