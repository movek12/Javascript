import React, { useState } from 'react'
import './Registration.css';
export default function ALogInForm1() {

    const [userInfo,setUserInfo] = useState({
        firstname : '',
        lastname : '',
        address : '',
        mobilenumber : '',
        emailaddress : '',
    })
    const [firstname,lastname,address,mobilenumber,emailaddress] = useState('');

    const handleFirstName = ({target: {value}}) => {
        setUserInfo({...userInfo,firstname:value});
    }
    const handleLastName = ({target:{value}}) => {
        setUserInfo({...userInfo,lastname:value})
    }
    const handleAddress = ({target:{value}}) => {
        setUserInfo({...userInfo,address:value})
    }
    const handleMobileNumber= ({target:{value}}) => {
        setUserInfo({...userInfo,mobilenumber:value})
    }
    const handleEmailAddress = ({target:{value}}) => {
        setUserInfo({...userInfo,emailaddress:value})
    }
  return (
    <div>
        <div 
        style={{
            border: "2px solid black",
            width: "100px",
            justifyContent:'center',
            display: 'flex',
        }}>
            
            <label htmlFor="firstname">Firstname: </label>
            <input type="text"
            className='input-field'
            value={userInfo.firstname}
            onClick={handleFirstName}/>

            <label htmlFor="lastname">Lastname: </label>
            <input type="password"
            className='input-field'
            value={userInfo.lastname}
            onClick={handleLastName}/>
            
            <label htmlFor="Address">Address: </label>
            <input type="text"
            className='input-field'
            value={userInfo.address}
            onClick={handleAddress}/>
            
            <label htmlFor="Mobilenumber">Mobile Number: </label>
            <input type="number"
            className='input-field'
            value={userInfo.mobilenumber}
            onClick={handleMobileNumber}/>
            
            <label htmlFor="Emailaddress">E-mail Address: </label>
            <input type="text"
            className='input-field'
            value={userInfo.emailaddress}
            onClick={handleEmailAddress}/>
            
        </div>

    </div>
  )
}
