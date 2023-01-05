import React, { useEffect } from 'react'

const  TimeRenderer= () => {
    const [count,setCount] = useState(0);

    useEffect (() =>{
        document.title = `Running ${count} times`;
    console.log("running")
    },[count]);
    
    const handleIncrease = () =>{
        setCount((prev) => prev + 1);
    };
  return (
    <div>
        <p>{count}</p>
        <button onClick={handleIncrease}>Click</button>
    </div>
  )
}
export default TimeRenderer;