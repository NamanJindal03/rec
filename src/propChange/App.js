import React,{useState} from 'react'
import Child from './Child'

export default function App() {
    const [sampleState, setSampleState] = useState(0)
  return (
    <>
        {sampleState}
        <button onClick={()=>setSampleState(sampleState+1)}>Update Parent State</button>
        <Child sampleState={sampleState}/>
    </>
  )
}
