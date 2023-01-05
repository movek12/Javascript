import React, { useState } from 'react'
 function Fruits() {
  const [isAuthenticated, setIsAuthenticated] = useState (true);
    const Fruits = [
        {id:1, name:"Papaya"},
        {id:2, name:"Mango"},
        {id:3, name:"Kiwi"}
];
const handleState = () => {
  setIsAuthenticated(false);
};
  return (
    <>
    {/* <ul>
        {Fruits.map((Fruitslist, i) =>(
            <ListDisplay data={Fruitslist.name} key={Fruitslist.id} />
        ))}
    </ul>
    </> )
        }
        */}
  
     <p>{isAuthenticated ? "Hello Authenticated" : "Not Autheticated"}</p>
    <button type='button' onClick={handleState}>
      Update State
    </button> 
    </>
  )
}
export default Fruits;
console.log(Fruits);
