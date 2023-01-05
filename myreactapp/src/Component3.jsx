import React, { useContext } from 'react'
import { UserContext } from './ContextHook'

export default function Component3() {
    const user = useContext(UserContext);
  return (
    <div>
        <h3>hello {user}</h3>
    </div>
  )
}
