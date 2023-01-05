import React, { useRef, useState } from 'react'

export default function CounterWithUseRef() {

    const [inputValue,setInputValue] = useState("");
    const inputElement = useRef();
    const countRef = useRef(0);
   

    const handleIncrease = () =>{
        countRef.current = countRef.current + 1;
        alert(`you clicked ${countRef.current} times`)
    
    }
    console.log(countRef);
  return (
    <div>
        <input type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} 
    />
    <button onClick={handleIncrease}>Click</button>
    </div>
  )
    
}
