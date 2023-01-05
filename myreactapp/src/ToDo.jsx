import React, { useState } from 'react'

export default function ToDo() {
    const [todo,setToDo] = useState([]);
    const [inputValue,setInputValue] = useState([]);
    const handleInputValue = ({target: {value}}) => {
        console.log(value,'inputvalue');
        setInputValue(value);
        
    }
    const handleAddButton = () => {
        console.log(todo,'todo before update');
        setToDo([...todo, inputValue]);
        console.log(todo, 'todo after update');
        setInputValue('');
    }
    const handleSubmit = (event) => {
        event.preventDefault();
    }
  return (
    <div>
        <form onSubmit={handleSubmit} >
        <input type="text"
        value={inputValue}
        onChange={handleInputValue} />
        <button onClick={handleAddButton}>Add Todo</button>
        </form>
    </div>
  )
}
