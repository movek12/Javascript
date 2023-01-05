import React from 'react'

const Form = ()=> {
  return (
    <>
    <input 
    type="text" 
    placeholder='Username'
    id='Username'
    />
    <input 
    type="text" 
    name="FirstInputField" 
    id='Password'
    placeholder='Password' 
    />
    <button type='submit' id='submitButton'>
        Submit
    </button>
    

    </>
  )
}
