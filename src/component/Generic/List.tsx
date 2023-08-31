import React from 'react'
type ListProps<T>={
    items:T[],
    onClick:(value:T)=>void
}
// const List =<T extends string | number> ({items,onClick}:ListProps<T>) => {
// const List =<T extends {id:number }> ({items,onClick}:ListProps<T>) => {
const List =<T extends {}> ({items,onClick}:ListProps<T>) => {
  return (
    <div>
        <h2>List</h2>
        {
            items.map((item,index)=>{
                return(
                    <div key={index} onClick={()=>onClick(item)}>
                       
                    </div>
                )
            })
        }
    </div>
  )
}

export default List