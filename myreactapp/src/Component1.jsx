import React, { memo } from 'react'
import Component2 from './Component2'

 const  Component1 =({user}) => {
  console.log("i am running");
  return (
    <div>
      <p>hello {user}</p>
        {/* <Component2/> */}
    </div>
  )
}
export default memo(Component1);