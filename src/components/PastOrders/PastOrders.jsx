import React,{useState,useEffect} from 'react'
import { images } from '../../constants'
import {Sidebar, NavbarSuccess, EachOrder} from '../index'
import { useNavigate } from 'react-router-dom'
import './PastOrders.css'

const PastOrders = () => {
  const [orders,setorders] = useState([])
  const createOne = useNavigate()

  const handleClick =()=>{
    createOne('/CreateOrder')
  }
  async function getOrders(){
    let username = localStorage.key(0)
    let newtoken = localStorage.getItem(username)
    const reqdata = await fetch("https://laundry-backend-app.herokuapp.com/orders",{
      method:'GET',
      headers:{
        'content-Type':'application/json',
        Authorization:newtoken,
      }
    })
    const gotdata = await reqdata.json()
    setorders([...gotdata.data])
  }
  useEffect(() => {
    getOrders()
  }, [])
  
  return (
    <div style={{display:'flex',flexDirection:"column", width:"100%"}}>
      <NavbarSuccess/>
      <div className='app-past-orders'>
        <Sidebar/>
        <div className='app-orders'>
          <div className="past-heading">
            <h3>Orders | {orders.length}</h3>
            <div>
            <input type="text"/>
            <img src={images.search} alt="searchIcon"/>
            </div>
          </div>

        {orders.length? 
        <table>
          <thead>
            <tr>
              <th>Order Id</th>
              <th>Order Date & Time</th>
              <th>Store Location</th>
              <th>City</th>
              <th>Store Phone</th>
              <th>Total Items</th>
              <th>Price</th>
              <th>Status</th>
              <th style={{color:'#383737'}}>Cancel Order</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order,idx)=>{
              return(
                  <EachOrder key={`order ${idx}`} id={order._id} order={order} idx={idx} getOrders={getOrders}/>
              )
            })
            }
          </tbody>
        </table>
        :
        <div className='app-blank-order'>
            <p>No order available</p>
            <button onClick={handleClick}>Create</button>
        </div>
        }
      </div>
  </div>
</div>
  )
}

export default PastOrders

/*
Order Id
Order Date & Time
Store Location
City
Store Phone
Total Items
Price
Status
View

orderid,orderdate,city,phone,totalitems,price,status,view
*/
