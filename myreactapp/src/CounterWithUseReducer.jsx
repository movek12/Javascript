import React, { useReducer, useState } from 'react'
import Component1 from './Component1';
const initialState = {count: 0};
const reducer = (state,action) => {
    switch(action.type) {
        case 'Increase' :
         return{count: state.count + 1};
        case "Decrease" :
         return {count: state.count - 1};
         case 'Reset' :
            return {count : 0};
        default :
         throw new Error();   
    }
};

export default function CounterWithUseReducer() {
    
const [state,dispatch] = useReducer(reducer,initialState);
const [user,setUser] = useState("DON");


    const handleIncrease =() => {
        dispatch({type:"Increase"})
        setUser("Hung Min Son")
    }
    const handleDecrease =() => {
        dispatch({type:"Decrease"})
        setUser("Bonn")
    }
    const handleReset=() => {
        dispatch({type:"Reset"})
        setUser("Ronn")
    }

  return (
    <div>
        Count: {state.count}
        <br />
        <button onClick={handleIncrease}>Plus</button>
        <button onClick={handleDecrease}>Minus</button>
        <button onClick={handleReset}>Reset</button>
        <Component1 user={user}/>
    </div>
  )
}
