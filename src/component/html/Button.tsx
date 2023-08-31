import React from 'react'
type ButtonProps={
    variant :'primary'|'secondary',
    children:string
} & React.ComponentProps<'button'>
// } & Omit<React.ComponentProps<'button'>,'children'>
const Button = ({variant,children,...rest}:ButtonProps) => {
  return (
    <button className={`class-with-${variant}`} {...rest}>{children}</button>
  )
}

export default Button