import React from 'react'
import { useState } from 'react'
const Login = () => {
    const [isLoggedIn,setisLoggedIn]=useState(false)
    const handleLogin =()=>{
        setisLoggedIn(true)
    }
    const handleLogout =()=>{
        setisLoggedIn(false)
    }
  return (
    <div>
        <h1>Login</h1>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        <div>user is {isLoggedIn ?'login in':'log out'}</div>
    </div>
  )
}

export default Login