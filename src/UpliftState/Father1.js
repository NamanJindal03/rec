import React from 'react'
import Child1 from './Child1'

export default function Father1({counter}) {
  return (
    <>
        <Child1 counter={counter}/>
    </>
  )
}
