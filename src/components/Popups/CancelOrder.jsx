import React from 'react'
import './CancelOrder.css'
import {useNavigate } from 'react-router-dom'
import { images } from '../../constants/index'

const CancelOrder = ({id,OrderNum,ordercancel,setorderCancel,view,setView,cancel,setCancel,getOrders}) => {
    const gobacktoOrders = useNavigate()
    const handleClose = ()=>{
      setView(false)
      setCancel(false)
      setorderCancel(false)
    }

    const handleCancelOrder = async(e)=>{
        e.preventDefault()
        let username = localStorage.key(0)
        let token = localStorage.getItem(username)
        const resp = await fetch("https://laundry-backend-app.herokuapp.com/delete/"+id,{
            method:"DELETE",
            headers:{
                "content-Type":"application/json",
                Authorization: token,
            },
        })

        if(resp.status===200){
            alert("Post is successfully deleted")
            setView(false)
            setCancel(false)
            setorderCancel(false)
            // gobacktoOrders('/orders')
            getOrders()
        }
        else{
            alert("Failed to delete the post")
            setView(false)
            setCancel(false)
            setorderCancel(false)
        }

    }
  return (
    <div className='app-cancelorder'>
      <div className='cancelled'> 
        <div className='cancel-heading'>
          <p>Alert</p>
          <p className='cancel-close' onClick={handleClose}>X</p>
        </div>
        <div className="cancel-alert">
            <div className='div-cancel-img'>
              <img src={images.cancel} alt="cancelAlert"/>
            </div>
            <div className='cancel-text'>
              <h2>Are you sure you want to cancel</h2> 
              <h2>the order <b style={{fontSize:"24px",color:"#5861AE"}}>No. {OrderNum}</b></h2>
            </div>
        </div>
      </div>
    
    <button onClick={handleCancelOrder}>proceed</button>

    </div>
  )
}


export default CancelOrder
