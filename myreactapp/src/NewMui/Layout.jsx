import React from 'react'
import Header from './Header'
import Footer from './Footer';
//children is a key name of props
function Layout({ children }) {
  return (
    <>
    <Header/>
    <br /><br /><br /><br /><br/>
    <br /><br /><br /><br /><br/>
    {children}
    <br /><br /><br />
    <Footer/>
    </>
  )
}

export default Layout