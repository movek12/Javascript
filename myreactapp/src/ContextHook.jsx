import React, { createContext, useState } from 'react'
import Component1 from './Component1';
export const UserContext = createContext;
export default function ContextHook() {
    const [user,setUser]= useState('Mobek');
    const handleUser = ({target:{value}}) =>{
        setUser(value);
    }
  return (
    <div>
        <input type="text"
        onChange={handleUser} 
        value={user}
        />
        {/* <Component1 user={user}/> */}
        <UserContext.provider value={user}>
            <Component1/>
        </UserContext.provider>
    </div>
  )
}
