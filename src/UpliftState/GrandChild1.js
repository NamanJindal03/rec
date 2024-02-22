import React, {useState} from 'react'

export default function GrandChild1(props) {
  return (
    <div style={{border: '3px solid black'}}>
        <div>
            Display Counter : {props.counter}
        </div>
        {/* <button onClick={()=> setCounter(counter+1)}>Add</button> */}
    </div>
  )
}
