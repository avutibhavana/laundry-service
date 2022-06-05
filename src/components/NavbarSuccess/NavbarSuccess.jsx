import React from 'react'
import { images } from '../../constants'
import './NavbarSuccess.css'
const Navbar = () => {
  let newName = localStorage.key(0)
  return (
    <div className='app-navbar'>
      <h1>Laundry</h1>
      <div className='app-navlinks'>
        <a href="#" className='nav-static-links'>Pricing</a>
        <a href="#" className='nav-static-links'>Career</a>
        <div className='nav-user'>
          <img src={images.avatar} alt="New user"/>
          <h4>{newName}</h4>
        </div>
      </div>    
    </div>
  )
}

export default Navbar