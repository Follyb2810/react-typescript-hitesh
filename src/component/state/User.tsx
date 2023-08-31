import React, { useState } from 'react'
type AuthUser={
    name:string,
    email:string
}
const User = () => {
    const [user,setUser]=useState<AuthUser | null>(null)
    // const [user,setUser]=useState<AuthUser>({} as AuthUser)
    const handleLogin=()=>{
        setUser({
            name:'folly',
            email:'folly@gmail'
        })
    }
    const handleLogout=()=>{
        setUser(null)
    }
  return (
    <div>
        <h1>user</h1>
        <button onClick={handleLogin}>login</button>
        <button onClick={handleLogout}>logout</button>
        <div> user name is{user?.name}</div>
        <div> user email is {user?.name }</div>
    </div>
  )
}

export default User