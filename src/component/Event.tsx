import React from 'react'
type ButtonProp ={
    handleCick:(e:React.MouseEvent<HTMLButtonElement>,id:number)=>void,
     
}
const Event = (props:ButtonProp) => {
  return (
    <button onClick={(e)=>props.handleCick(e,1)}>Event</button>
  )
}

export default Event