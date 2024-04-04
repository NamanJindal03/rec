import React, {useEffect, useRef} from 'react'
import {Child} from './Child';

export default function App() {
    const sampleRef = useRef();
    useEffect(()=>{
        console.log(sampleRef.current)
    },[])
  return (
    <>
        <div>This is my parent component</div>
        {/* <input type="text" ref={sampleRef} /> */}
        <Child ref={sampleRef}/>
    </>
  )
}
