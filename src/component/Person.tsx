import React from 'react'
import { PersonProps } from './Person.types'
const Person = ({name:{first,last}}:PersonProps) => {
  return (
    <div>Person {first}{last}</div>
  )
}

export default Person