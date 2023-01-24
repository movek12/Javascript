import React, { Children } from 'react'
import Footer from './Footer'
import Header from './Header'

function Layout() {
  return (
    <>
    <Header/>
    {Children}
    <Footer/>
    </>
  )
}

export default Layout