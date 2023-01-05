import { type } from '@testing-library/user-event/dist/type';
import React, { useState } from 'react'

export default function ApplicationForm() {
    const [userInfo, setUserInfo] = useState({
        username:"",
        password:"",
        confirmpassword:""
    });
    const {username,password,confirmpassword} = userInfo;
    
    console.log(userInfo);
    const [type,setType] = useState("password");

    const handleUserName = ({target: {value}}) => {
        
        setUserInfo({...userInfo,username: value})
    }
    console.log(userInfo);
    const handlePassword = ({target: {value}}) => {
       
        setUserInfo({...userInfo,password: value});
    }
    const handleSubmit = () => {
       username !== "" && password !== ""  
        ? alert ("Submitted")
        : alert ("Please fill the inputfield");
    }  
    const showPassword = () => {
        type !== "password"
        ? setType('text')
        : setType('password')
    }

  return (
    <form action="">
        <div>
        <label htmlFor="Username">Username</label>
        <input 
    type="text" 
    placeholder='Username'
    id='username-input'
    value={userInfo.username}
    onChange={handleUserName}
    />
    <br />
    <br />
    <label htmlFor="password">Password</label>
    <input 
    type="password" 
    name="FirstInputField" 
    id='password-input'
    placeholder='Password'
    value={userInfo.password}
     onChange={handlePassword} 
    />
    <button type="text"
    onClick={showPassword}>View</button>
    <br />
    <br />
    <button type='submit' id='submitButton' onClick={handleSubmit}>
        Submit
    </button>
    </div>
    </form>
    
  )
}
