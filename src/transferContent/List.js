import React from 'react'
import Item from './Item'
export default function List({list, handleCheckItemClick}) {
  return (
    <div className='listBox'>
        {
            list.map((item)=>{
                return (
                    <Item item={item} handleCheckItemClick={handleCheckItemClick} key={item}/>
                )
            })
        }
    </div>
  )
}
