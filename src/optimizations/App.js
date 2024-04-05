import React,{useState, useMemo} from 'react'
import Child1 from './Child1'

export default function App() {
    const [counter, setCounter] = useState(0);
    const [counter2, setCounter2] = useState(0);
    const arr = useMemo(()=>{
        return [1,2,3,4,5]
    },[counter2])
    
  return (
    <>
    
        <div>App</div>
        <Child1 arr={arr}/>
        {counter}
        <button onClick={()=> setCounter(counter+1)}>Increase</button>
    </>
  )
}
