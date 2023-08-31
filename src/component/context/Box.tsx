import React, { useContext } from 'react'
import { themeContext } from './ThemeContext'  
const Box = () => {
  const theme = useContext(themeContext)
  return (
    <div style={{backgroundColor:theme.primary.main,color:theme.secondary.text}}>Box</div>
  )
}

export default Box