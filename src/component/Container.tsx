import React from 'react'
type ContainerPros ={
    styles: React.CSSProperties
}
const Container = (props:ContainerPros) => {
  return (
    <div style={props.styles}>Container</div>
  )
}

export default Container