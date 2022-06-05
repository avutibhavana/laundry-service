import React,{useState} from 'react';
import {Successful} from "../index"

import './Summary.css'
const Summary = ({Items,total,proceed,setProceed}) => {
  const [ordersuccess,setorderSuccess] = useState(false)
  const types=["shirts","tshirts","trousers","jeans","boxers","joggers","others"]

  const handleClose = ()=>{
    setProceed(!proceed)
  }
  const handleOrderSuccess = async()=>{
    const user = localStorage.key(0)
    const token = localStorage.getItem(user)
    let orderId = 'ORD000' + Math.floor(Math.random()*10000+1)
    let stringdate = String(new Date())
    let arr = stringdate.split(' ')
    let createdAt = arr.slice(1,5).join(" ")
    const Location = 'Vijayawada'
    const city = 'Guntur'
    const Phone = '+91-8919022059'
    const address = "46-4-6/4,Some x heights, Guntur -523434"
    let count = 0
    for(let i=0;i<7;i++){
      count+=parseInt(Items[types[i]].quantity)
    }
    const res = await fetch("http://localhost:8080/add/order",{
        method:'POST',
        headers:{
          'content-Type':'application/json',
          Authorization:token,
        },
        body:JSON.stringify({
          orderId : orderId,
          orderTimeDate:createdAt,
          storeLocation:Location,
          city:city,
          storePhone:Phone,
          totalItems:count,
          price:total,
          address:address,
          orderDetails:Items,
        }),
      })
      if(res.status===200){
        alert("Successfully added the post")
        setorderSuccess(true)
      }
      else{
        alert("Cannot add the post")
        setorderSuccess(false)
      }
  }

  return (
    <div className={ordersuccess?'order-popup':'order-success-summary'} style={{zIndex:"100",position:"absolute"}}>
      <div className='app-checkout' style={!ordersuccess?{display:"flex"}:{display:"none"}}>
          <div className='app-checkout-heading'>
              <h2>Summary</h2>
              <h2 className="close" onClick={handleClose}>&times;</h2>
          </div>

          <div className='user-address'>

            <div className='store-location'>
              <label htmlFor="">Store location</label>
              <input type="text" defaultValue='Vijayawada'/>
            </div>

            <div className='store-address'>
                <label htmlFor="text" >Store Address:</label>
                <input type="text" defaultValue='46-4-6/4,Some X heights, Guntur - 523434' />
            </div>

            <div className='user-phone'>
                <label htmlFor="phone">Phone</label>
                <input type="number" defaultValue={8919022059} />
            </div>
          </div>

          <h4 style={{width:'100%',marginLeft:"18px"}}>Order Details</h4>

          <table className='checkout-items'>
            <thead style={{display:'none'}}><td></td></thead>
            <tbody>
              {types.map((type)=>{
                let qty = Items[type].quantity
                let washAmount = Items[type].washcost
                let washtype = Items[type].washtypes
                let productprice = Items[type].price

              return(
                <tr style={(qty && washAmount)?{color:'black'}:{display:'none'}}>
                  <td style={{textTransform:'capitalize'}}>{type}</td>
                  <td>{washtype}</td>
                  <td>{qty} X {washAmount}  = <b style={{color:'#5861AE',fontSize:"20px"}}> {productprice}</b></td>
                </tr>
                )
              })}
            </tbody>
          </table>
          <div className='checkout-costs'><p> SubTotal : {total}</p></div>
          <div className='checkout-costs'><p>Pickup Charges : {parseInt(total/5)}</p></div>
          <div className='checkout-costs' style={{backgroundColor:'#5861AE',color:'white'}}><p>Total Charges : {total+ parseInt(total/5)}</p></div>
          
        <div className='checkout-address'>
          <h3>Address</h3>
          <p>46-4-6/4,Some X heights, Guntur - 523434</p>
        </div>
        <button onClick={handleOrderSuccess}>confirm</button>
    </div>
      <div style={ordersuccess?{display:"flex"}:{display:"none"}}>
        <Successful/>
      </div>
  </div>
  )
}
export default Summary
