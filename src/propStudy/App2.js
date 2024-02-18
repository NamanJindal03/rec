import React from 'react'
import Child2 from './Child2'


export default function App2() {
    const dt1 = 'sample data'
    const dt2 = 'sample data 2'
    const obj = {dt1: 'some data', dt2: 'some data 2'}
    const obj2 = {one: "1", two: "2", three: "3", four: "4", five: 5}
  return (
    <>
        <Child2 dt1={dt1} dt2={dt2} obj={obj} obj2={obj2}/>
    </>
  )
}


/* 
    object desstructing works on the basis of key names

    array destructing working on the basis of placement

*/