import React, { useState } from 'react'

const ToDo = () => {
  //state to save array of todo
    const [todo,setToDo] = useState([]);
    //state to save
    const [inputValue,setInputValue] = useState([]);
   
    const handleInputValue = ({target: {value}}) => {
        console.log(value,'inputvalue');
        setInputValue(value);
        
    }
    //  setToDo=((prev)=> {
    //    prev.push(inputValue);
    //    return prev;
    // });
    const handleAddButton = () => {
        console.log(todo,'todo before update');
        setToDo([...todo, inputValue]);
        // setToDo([todo.push(inputValue)])
        console.log(todo, 'todo after update');
        setInputValue('');
    }
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //}
    const handleEdit = (index) =>{
      let newToDo = [...todo];
      newToDo.splice(index,1);
      setToDo(newToDo);
    }
    const handleDelete = (index) =>{
      let newToDo = [...todo];
      newToDo.splice(index,1);
      setToDo(newToDo);
    }
  return (
    <div>
        <input
        type="text"
        value={inputValue}
        onChange={handleInputValue} 
        />
        <button onClick={handleAddButton}>Add Todo</button>
        <ul>
          {todo.map((item, index)=>
          <li key={index}>
          {todo}
          <button onClick={() => handleEdit(index)}>Edit</button>
          <button onClick={() => handleDelete(index)}>Delete</button>
        </li>
          )}
          
        </ul>
    </div>
  )
}

export default ToDo;