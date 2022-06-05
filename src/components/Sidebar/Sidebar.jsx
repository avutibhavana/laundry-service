import { images } from '../../constants'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import './Sidebar.css'

const Sidebar = ({mail,setMail}) => {
  const [home,setHome] = useState(false)
  const [add,setAdd] = useState(false)
  const [list,setList] = useState(false)
  const [logout,setLogout] =useState(false)

  const backtoHome = useNavigate()

  const handleAdd = ()=>{
    setAdd(!add)
    if(add){
      setHome(false)
      setList(false)
    }
  }
  const handleList = ()=>{
    setList(!list)
    if(list){
      setHome(false)
      setAdd(false)
    }
  }

  const handleLogout = async (e) =>{
    e.preventDefault();
    setHome(!home)
    if(home){
      setAdd(false)
      setList(false)
    }
    let removeUser = localStorage.key(0)
    let removeToken = localStorage.getItem(removeUser)
    const res=await fetch("https://laundry-backend-app.herokuapp.com/logout", {
        method:"GET", 
        headers:{
            "Content-Type":"application/json",
            Authorization:removeToken,
        }
      })
      if(res.status === 200 ){  
        localStorage.removeItem(removeUser)
        alert("User has logged out")
        setLogout(true)
        backtoHome('/')
      }else{
        alert("Internal server error")
      }
    }

  return (
    <div className='app-sidebar'>
      <Link to='/'>
        <div className='app-side-icon'>
        <img src={home?images.homeBlue:images.home} alt="Home" className={home?'icon-active':'icon-inactive'} onClick={handleLogout}/>
        </div>
      </Link>

      <Link to='/createorder'>
        <div className='app-side-icon'>
          <img src={add?images.addBlue:images.add} alt="addnew" className={add?'icon-active':'icon-inctive'} onClick={()=>handleAdd}/>
        </div>
      </Link>

      <Link to='/orders'>
        <div className='app-side-icon'>
          <img src={list?images.listBlue:images.list} alt="orderslist" className={list?'icon-active':'icon-inactive'} onClick={()=>handleList}/>
        </div>
      </Link>
    </div>
  )
}

export default Sidebar