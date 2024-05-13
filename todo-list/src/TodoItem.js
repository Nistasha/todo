// TodoItem.js
import React, { useState } from 'react';

function TodoItem({ todo, onDelete, onEdit}) {

  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onEdit(todo.id, editText);
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <input type="text" value={editText} onChange={(e) => setEditText(e.target.value)} />
      ) : (
        <>
          {todo.text}
          <button onClick={onDelete}>Delete</button>
          <button onClick={handleEdit}>Edit</button>
        </>
      )}
      {isEditing && (
        <button onClick={handleSave}>Save</button>
      )}
    </li>
  );
}

export default TodoItem;
