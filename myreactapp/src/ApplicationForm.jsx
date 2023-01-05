import React, { useState } from 'react'

export default function ApplicationForm(setIsRegistered) {
    const [userInfo, setUserInfo] = useState({
        username:"",
        password:"",
        confirmpassword:""
    });

    const {username,password,confirmpassword} = userInfo;
    console.log(userInfo);

    const handleUserName = ({target: {value}}) => {
        
        setUserInfo({...userInfo,username: value})
    }
    console.log(userInfo);
    const handlePassword = ({target: {value}}) => {
       
        setUserInfo({...userInfo,password: value});
    }
    const handleConfirmPassword = ({target: {value}}) => {
       
        setUserInfo({...userInfo,confirmpassword: value});
   }
    const handleSubmit = () => {
       username !== "" && password !== "" ?  password !== confirmpassword ? <p>Password is incorrect</p> :
         alert ("Submitted")
        : alert ("Please fill the inputfield");
        setIsRegistered(true);
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
    <br />
    <br />
    <label htmlFor="confirmPassword" style={{color:'red'}}>Confirm Password</label>
    <input type="password"
    placeholder='confirm password'
    id='confirPassword-input'
    value={userInfo.confirmpassword}
    onChange= {handleConfirmPassword} 
    />
    <br />
    <br />
    <button type='submit' id='submitButton' onClick={handleSubmit}>
        Submit
    </button>
    </div>
    </form>
    
  )
}
