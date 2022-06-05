import React ,{useState}from 'react'
import { Icon } from 'react-icons-kit'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'
import {eye} from 'react-icons-kit/feather/eye'
import { Link ,useNavigate} from 'react-router-dom'
import {Details, Sidebar, Navbar, PastOrders, CreateOrder, Summary} from "../index"
import axios from "axios"
import "./SignIn.css"

const SignIn = () => { 
  const pastorders = useNavigate()
  const [mail, setMail]=useState("")
  const [password,setPassword]=useState("")
  const [login, setLogin]=useState(false)
 const loginUser = async (e) =>{
      e.preventDefault();
      axios.post("https://laundry-backend-app.herokuapp.com/login",{
        mail:mail,
        password:password
      })
      .then((response)=>{
        let newtoken = response.data.genToken 
        let Username = response.data.userDetails.name 
        localStorage.setItem(Username,newtoken)
        alert("Successfully logged in")
        setLogin(true)
        pastorders('/orders')
        }).catch((err)=>{
          setLogin(false)
        })
 }
 const [show,setShow]=useState(false)

   return (   
  <div className='app-sigin'>  
    <Navbar/>
    <div className="app-sigin-section">      
        <div className="sigin-left">        
            <h2 className="header">Laundry <br></br>Service</h2>   
            <h4>Doorstep Wash & Dryclean Service</h4>      
            <p>Don't Have An Account?</p>     
            <Link to="/register"><button>Register</button></Link>  
        </div>    
        <form method='POST' action={login? "/orders":"/"} onSubmit={loginUser} className='app-userform'>     
          <span>SIGN IN</span>  

          <label htmlFor="mail">Mobile/Email</label>      
          <input type="text" id='mail' value={mail}
            onChange={(e)=>setMail(e.target.value)}
          />  

          <label htmlFor="password">Password</label>    
          <input type={show?'text':'password'} id='password' value={password}
          onChange={(e)=>setPassword(e.target.value)}
          />  
          <span className="eye-icon"onClick={e=>{setShow(!show)}}><Icon icon={show?eye:eyeOff} size={20}/></span>
          <a className="forgot"href="#">Forgot password?</a> 
          <button type="submit" className="signin" onClick={loginUser}>Sign in</button>       
        </form>           
      </div>    
  <Details/>
</div> 
  )
}
export default SignIn










