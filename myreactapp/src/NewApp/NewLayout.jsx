import React from 'react'
import NewFooter from './NewFooter'
import NewHeader from './NewHeader'

function NewLayout({children}) {
  return (
    <>
    <NewHeader/>
    <br />    
    <br />
    <br />
    <br />
    {children}
    <br />
    <br />
    <NewFooter/>
    </>
  )
}

export default NewLayout