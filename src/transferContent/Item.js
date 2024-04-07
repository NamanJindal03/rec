import React from 'react'

export default function Item({item, handleCheckItemClick}) {
  return (
    <div>
        <input type="checkbox" onChange={()=>handleCheckItemClick(item)}/>
        <span>{item}</span>
    </div>
  )
}
