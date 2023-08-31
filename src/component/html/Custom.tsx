import React from 'react'
import Greet from '../Greet'

const Custom = (props:React.ComponentProps<typeof Greet>) => {
  return (
    <div>
        {
            props.isLogged
        }
    </div>
  )
}

export default Custom