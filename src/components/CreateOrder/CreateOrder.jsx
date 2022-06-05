import React, { useState } from "react";
import {images} from '../../constants/index'
import {Sidebar,Product, NavbarSuccess, Summary} from "../index"
import './CreateOrder.css'

const CreateOrder = () => {

const types=["shirts","tshirts","trousers","jeans","boxers","joggers","others"]

const Items = {shirts:{},tshirts:{},trouser:{},jeans:{},boxers:{},joggers:{},others:{}}

const [proceed,setProceed] = useState(false)
const [total,setTotal] = useState(0)


const handleCancel =(e)=>{
  e.preventDefault()
  setProceed(false)
  }

  const handleProceed = (e)=>{
    let Sum = 0
    types.map((type,index)=>{
    Sum+=Items[type].price
    return Sum
  })
  setTotal(Sum)
  if(Sum===0) alert("Please select some services")
  if (Sum!==0) setProceed(true)
  }


return (
  <div style={{display:'flex',flexDirection:"column", width:"100%"}}>
      <NavbarSuccess/>
  <div className="app-create-order" style={proceed?{opacity:"0.6",zIndex:"1"}:{opacity:"1"}}>
    <Sidebar/>
    <div className="create-section">
      <div className="create-heading">
        <h3>Create Order</h3>
        <div>
        <input type="text"/>
        <img src={images.search} alt="searchIcon"/>
        </div>
      </div>

      <div className="create-table-header">
        <h3 className="order-producttype">Product Type</h3>
        <h3 className="order-quantity">Quantity</h3>
        <h3 className="order-washtype">Wash Type</h3>
        <h3 className="order-price">Price</h3>
      </div>

      <div className="table-order-options">
        {types.map((type,index)=>{ 
          return(<Product key={`productType-${index}-${type}`} type={type} index={index} Items={Items}/>)
        })}
        </div>

        <div className="create-proceed">
            <button onClick={handleCancel}>cancel</button>
            <button onClick={handleProceed}>proceed</button>
        </div>
    </div>
  </div>
    <div className="order-summary" style={proceed?{display:"flex",opacity:"1"}:{display:"none"}}>
      <Summary Items={Items} total={total} proceed={proceed} setProceed={setProceed}/>
    </div>
  </div>
 )
}

export default CreateOrder
