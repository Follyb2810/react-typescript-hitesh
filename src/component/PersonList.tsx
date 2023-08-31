import React from 'react'
import { Name } from './Person.types'
type PersonListProps ={
    name:Name[]
}
type folly ={
    key:{}[],
    id:Array<number>
}
const PersonList = (props:PersonListProps) => {
  return (
    <div>
        {
            props.name.map((p,i)=>(
                <h1>{p.first} / {p.last}</h1>
            ))
        }

    </div>
  )
}

export default PersonList