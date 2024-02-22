import React from 'react'
import GrandChild1 from './GrandChild1'

export default function Child1({counter}) {
    
  return (
    <>
        <GrandChild1 counter={counter}/>
    </>
  )
}
