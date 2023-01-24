import React, { useState } from "react";
// import './TodoApp.css'
const TodoApp = () => {

  // [{title:'', desc:''}, {title:'',desc:''}, ......]
  const [todos, setTodos] = useState([])
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [edit, setEdit] = useState(false)

  const handleTitle = ({ target: { value } }) => {
    setTitle(value)
  }
  const handleDescription = ({ target: { value } }) => {
    setDescription(value)
  }
  const handleEdit = (index) => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
    setTitle(todos[index].title)
    setDescription(todos[index].description)
    setEdit(true)
  }
  const handleDelete = (index) =>{
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }
  const handleTodos = (e) => {
    e.preventDefault();
    setEdit(false)
    if (title === '' || description === '') {
      alert('please enter todos')
    } else {
      const newItem = { title, description }
      setTodos([...todos, newItem])
      setTitle('')
      setDescription('')
    }

  }
  return (
    <>
      <form onSubmit={handleTodos}>
        <h1 className="title">Todo App</h1>
        <input
          type='text'
          placeholder='Title'
          value={title}
          onChange={handleTitle} />
        <input
          type='text'
          placeholder='Description'
          value={description}
          onChange={handleDescription} />
        <button
          type='submit'
          className="submit_btn">
          {edit ? 'update' : 'add'}
        </button>

        <ul className="items_container">
          {todos.map((item, index) => (
            <li key={index} className='item'>
              <h1 className="todo_title">{item.title}</h1>
              <p className="todo_desc">{item.description}</p>
              <button
                type='button'
                className='btn edit'
                onClick={()=>handleEdit(index)}>
              </button>
              <button
                type='button'
                className='btn delete'
                onClick={()=> handleDelete(index)}>
                Delete
              </button>
            </li>
          ))}
        </ul>

      </form>
    </>
  )
}
export default TodoApp