import React, { useEffect, useState } from 'react'

export default function Counter() {
  const [count,setCounter] = useState(0);

  const handleIncrease = () =>{
    setCounter((prevCount) => prevCount + 1);
  }
  const handleDecrease = () =>{
    setCounter((prevCount) => prevCount - 1);
  }
  const handleReset = () =>{
    setCounter(0);
  }
  useEffect(() =>{
     
      setCounter(count + 1);
    },[]);

  return (
    <div>
      <h2>My Counter App</h2>
      <p>I have rendered {count} times.</p>
      <button className='Inc-btn' onClick={handleIncrease}>Plus</button>
      <button className='Dec-btn' onClick={handleDecrease}>Minus</button> 
      <button className='Reset-btn' onClick={handleReset}>Reset</button> 
    </div>
  )
}
