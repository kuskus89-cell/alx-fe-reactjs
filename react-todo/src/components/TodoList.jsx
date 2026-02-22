import React, { useState } from 'react';

function TodoList() {
  // Updated to objects to support "toggling"
  const [todos, setTodos] = useState([
    { text: 'Eat breakfast', completed: false },
    { text: 'Go to the gym', completed: false },
    { text: 'Finish React project', completed: false },
    { text: 'Learn React', completed: false }
  ]);
  const [newTask, setNewTask] = useState('');

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== '') { // Fix: Add only if NOT empty
      setTodos([...todos, { text: newTask, completed: false }]);
      setNewTask('');
    }
  }

  function deleteTask(index) {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  }

  function toggleTask(index) {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  }

  return (
    <div className='to-do-list'>
      <h1>My To-Do List</h1>
      <div>
        <input
          type="text"
          placeholder="Add new todo" // Matches test: getByPlaceholderText
          value={newTask}
          onChange={handleInputChange} 
        />
        <button className='add-button' onClick={addTask}>
          Add {/* Matches test: getByText("Add") */}
        </button>
      </div>
      <ol>
        {todos.map((todo, index) => (
          <li key={index}>
            <span 
              className="text" 
              onClick={() => toggleTask(index)}
              style={{ textDecoration: todo.completed ? "line-through" : "none" }}
            >
              {todo.text}
            </span>
            <button className="delete-button" onClick={() => deleteTask(index)}>
              Delete
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default TodoList; 