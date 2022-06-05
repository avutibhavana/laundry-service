import React,{useState} from 'react';
import {CancelOrder} from "../index"

import './CancelSummary.css'
const CancelSummary = ({cancel,view,order,id,setView,setCancel,getOrders}) => {
  const [ordercancel,setorderCancel] = useState(false)
  const types=["shirts","tshirts","trousers","jeans","boxers","joggers","others"]
  const Items = order.orderDetails
  const total = order.price
  const OrderNum = order.orderId
  const handleClose =()=>{
    setView(false)
    setCancel(false)
  }
  return (
  <div className={ordercancel?'order-cancel-popup':'order-cancel-summary'}>
    <div className='app-cancel-checkout' style={!ordercancel?{display:"flex",flexDirection:"column"}:{display:"none"}}>
        <div className='app-cancel-checkout-heading'>
            <h2>Summary</h2>
            <h2 className="close" onClick={handleClose}>&times;</h2>
        </div>

        <div className='cancel-user-address'>
          <div className='cancel-store-location'>
            <label htmlFor="">Store location</label>
            <input type="text" />
          </div>
          
          <div className='cancel-store-address'>
              <label htmlFor="text">Store Address:</label>
              <input type="text" />
          </div>

          <div className='cancel-user-phone'>
              <label htmlFor="phone">Phone</label>
              <input type="number" />
          </div>
        </div>

        <h4 style={{width:'100%',marginLeft:"40px"}}>Order Details</h4>

        <table className='cancel-checkout-items'>
        <thead style={{display:'none'}}><td></td></thead>
            <tbody>
              {types.map((type)=>{
                let qty = Items[type].quantity
                let washAmount = Items[type].washcost
                let washtype = Items[type].washtypes
                let productprice = Items[type].price
                console.log(qty,washAmount,washtype,productprice)

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
        <div className='cancel-checkout-costs'><p> SubTotal : {total}</p></div>
        <div className='cancel-checkout-costs'><p>Pickup Charges : {parseInt(total/5)}</p></div>
        <div className='cancel-checkout-costs' style={{backgroundColor:'#5861AE',color:'white'}}><p>Total Charges : {total+ parseInt(total/5)}</p></div>
        
        <div className='cancel-checkout-address'>
          <h3>Address</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, libero perspiciatis</p>
        </div>
        <button onClick={e=>{setorderCancel(true)}} style={cancel?{color:'white',backgroundColor:'#F41313',border:"none"}:{display:"none"}}>Cancel Order</button>
    </div>
    <div className='cancel-order-success' style={ordercancel?{display:"flex"}:{display:"none"}}>
        <CancelOrder id={id} OrderNum={OrderNum} ordercancel={ordercancel} setorderCancel={setorderCancel} cancel={cancel} view={view} setCancel={setCancel} setView={setView} getOrders={getOrders}/>
    </div>
  </div>
  )
}
export default CancelSummary
