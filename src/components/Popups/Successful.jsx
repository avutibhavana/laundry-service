import React from 'react'
import './Successful.css'
import { Link } from 'react-router-dom'

const Successful = () => {
  return (
    <div className='Successful'>
      <i className="checkmark">✓</i>
        <h1>Your order is
          <br /> Successfully.</h1>
        <p>You can track the delivery in the
          <br/> "Orders section</p>
       <Link to="/orders"><button>Go to orders</button></Link> 
    </div>
  )
}
export default Successful