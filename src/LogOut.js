import React from 'react'
import { useHistory } from 'react-router-dom'
import "./Logout.css"

const LogOut = () => {
    const history= useHistory()
    const logOutHandler=()=>{
      history.replace('/login')
      localStorage.removeItem('token')
      
     
            
    }
  return (
    <div className="btn1">
      <button  onClick={logOutHandler}>LogOut</button>
    </div>
  )
}

export default LogOut
