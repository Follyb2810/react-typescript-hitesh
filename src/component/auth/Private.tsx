import React from 'react'
import Login from './Login'
import { ProfileProps } from './Profile'
type PriveProps ={
  isLoggedIn:boolean,
  component:React.ComponentType<ProfileProps>
}
const Private = ({isLoggedIn,component:Component}:PriveProps) => {
  if(isLoggedIn){
    return <Component name='folly'/>
  }else{
    return <Login/>
  }
}

export default Private