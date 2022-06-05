import React from 'react'
import "./Details.css"
import {images} from '../../constants/index'

const Details = () => {
  return (
    <div className='app-details'>
      <div className='app-offers'>
        <h2>Now Refer & Earn ₹500 for every referral*</h2>
        <p>* Terms and conditions will be applied</p>
      </div>

      <div className='app-sign-footer'>
        <div id='app-footer-about' className='app-footer-sections'>
          <h2>ABOUT US</h2>
          <p>Doorstep Wash & Dry Clean Service</p>
        </div>

        <div id='app-footer-home' className='app-footer-sections'>
          <h3>Home</h3>
          <p>Sign In</p>
          <p>Register</p>
        </div>

        <div id='app-footer-price' className='app-footer-sections'><h3>Pricing</h3></div>

        <div id='app-footer-career' className='app-footer-sections'>
          <h3>Career</h3>
          <p>Blogs</p>
          <p>Create</p>
        </div>

        <div id='app-footer-contact' className='app-footer-sections'><h3>Contact</h3></div>

        <div id='app-footer-socialmedia' className='app-footer-sections'>
          <h2>SOCIAL MEDIA</h2>
          <div className='app-media-icons'>
            <img src={images.facebook} alt="facebook" />
            <img src={images.instagram} alt="instagram" />
            <img src={images.linkedin} alt="linkedin" />
          </div>
        </div>

        </div>
    </div>
  )
}

export default Details
