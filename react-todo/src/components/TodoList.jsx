import React, { useState } from 'react';

function TodoList() {
   const [ Todos, setTodos ] = useState(['Eat Breakfast', 'Go to the gym', 'Finish React project']);
   const [newTask, setNewTask] = useState('');

   function handleInputChange(event) {
     setNewTask(event.target.value);
   }

   function addTask(){
    if(newTask.trim() === ''){
        setTodos([...Todos, newTask]);
        setNewTask('');
    }
        
   }

   function deleteTask(index) {
    const updatedTodos = Todos.filter((Element, i) => i !== index );
    setTodos(updatedTodos);
   }

   function moveTaskUp(index){
    if(index > 0){
        const updatedTodos = [...Todos];
        [[updatedTodos[index - 1]], [updatedTodos[index]]] =
         [[updatedTodos[index]], [updatedTodos[index - 1]]];
        setTodos(updatedTodos);
    }

   }

   function moveTaskDown(index){
    if(index < Todos.length - 1){
        const updatedTodos = [...Todos];
        [[updatedTodos[index]], [updatedTodos[index + 1]]] = [[updatedTodos[index + 1]], [updatedTodos[index]]];
        setTodos(updatedTodos);
    }
   }

  return(
    <div className='to-do-list'>

   <h1>My To-Do List</h1>
   
   <div>
      <input
      type="text"
      placeholder="Enter a task....."
      value={newTask}
      onChange={handleInputChange} />
      <button className='add-button'
      onClick={add-task}>
        Add Task
      </button>
      
   </div>
    <ol>
        {Todos.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button 
            className="delete-button"
            onClick={() => deleteTask(index)}>
              Delete
            </button>
            <button 
            className="move-button"
            onClick={() => moveTaskUp(index)}>
              Up
            </button>
            <button 
            className="move-button"
            onClick={() => moveTaskDown(index)}>
              down
            </button>
          </li>
        ))}
    </ol>

    </div>
  )
}

export default TodoList;