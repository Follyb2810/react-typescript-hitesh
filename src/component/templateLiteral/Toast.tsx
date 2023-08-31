import React from 'react'
type ToastProps ={
    position: Exclude<`${Horizontal}-${Vertical}`,'center-center'>|'center'
}
 type Horizontal = 'left'| "center"|"right"
 type Vertical = "top"|"center"|'bottom'
const Toast = ({position}:ToastProps) => {
  return (
    <div>Toast{position}</div>
  )
}

export default Toast