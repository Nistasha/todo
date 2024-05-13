// TodoList.js
import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, onDelete, onEdit }) {
  return (
    <ul>
      {/* Map over the todos array and render a TodoItem component for each todo */}
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} onDelete={() => onDelete(todo.id)} onEdit={onEdit} />
      ))}
    </ul>
  );
}

export default TodoList;
