import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='app-navbar'>
      <h1>Laundry</h1>
      <div className='app-navlinks'>
        <a href="#" className='nav-static-links'>Home</a>
        <a href="#" className='nav-static-links'>Pricing</a>
        <a href="#" className='nav-static-links'>Career</a>
        <a href="/" className='nav-links' id='nav-sign'>Signin</a>
      </div>    
    </div>
  )
}

export default Navbar