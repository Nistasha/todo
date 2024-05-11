import React, { useState } from 'react';
import TodoList from './TodoList';
import './App.css';

function App() {
  // Define state variables using useState hook
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  
   // Function to add a new todo
   const addTodo = () => {
    // Check if the input value is not empty
    if (inputValue.trim() !== '') {
      // Create a new todo object with a unique id and the input value
      const newTodo = { id: Date.now(), text: inputValue };
      // Update the todos state by adding the new todo to the existing list
      setTodos([...todos, newTodo]);
      // Clear the input value
      setInputValue('');
    }
  };

  // Function to delete a todo
  const deleteTodo = (id) => {
    // Filter out the todo with the specified id and update the todos state
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="App">
      <div>
      <h1>Todo List</h1>
      <input type="text" value={inputValue} onChange={(e)=> setInputValue(e.target.value)}/>
      <button onClick={addTodo}>Add Todo</button>
      <TodoList todos={todos} onDelete={deleteTodo} />
    </div>
    </div>
  );
}

export default App;
