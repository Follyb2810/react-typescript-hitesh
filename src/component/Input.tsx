import { type } from 'os'
import React from 'react'
type InputProps ={
    value:string,
    handleClick:(e:React.ChangeEvent<HTMLInputElement>)=>void
}
const Input = ({value,handleClick}:InputProps) => {
  return (
    <input type='text' value={value} onChange={handleClick}/>
  )
}

export default Input