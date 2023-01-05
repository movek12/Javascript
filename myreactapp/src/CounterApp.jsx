import React, { useEffect, useState } from 'react'

export default function CounterApp() {
    const [count,setCount] = useState(0);

    useEffect(() =>{
        let interval = setInterval(()=>{
          setCount((prev)=> prev + 1);
        },1000);
        return () => {
          console.log('i am clean up function');
          clearInterval(interval);
      };
      },[count]);
//handle INCREASE
const handleIncrease = ()=> {
    setCount((prev)=>prev +1)
}
  return (
    <div>
        <p>you have clicked {count} times</p>
        <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}
