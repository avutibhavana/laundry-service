import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import {Footer,SignIn,SignUp,PastOrders,CreateOrder,Summary} from "./components/index"

const App = () => {
  return (
    <div className='app-container'>
    <Router>
      <Routes>
        <Route path="/" element={<SignIn/>}/>
        <Route path="/register" element={<SignUp/>}/>
        <Route path="/orders" element={<PastOrders/>}/>
        <Route path ="/createorder" element={<CreateOrder/>}/>
        <Route path ="/checkout" element={<Summary/>}/>
      </Routes>
    </Router>
    <Footer/>
    </div>
  )
}

export default App
