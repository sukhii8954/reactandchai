import React from 'react'
import Navbar from './components/Header/Navbar'
import Footer from './components/Footer/Footer'
import {Outlet} from 'react-router-dom'
const Layout = () => {
  return (
    <>
    {/* to pass thing dynamically we use outlet from router-dom */}
    {/* here navbar and footer will remain same and things changes in outlet */}
      <Navbar/>
       <Outlet/>
      <Footer/>

    </>
  )
}

export default Layout
