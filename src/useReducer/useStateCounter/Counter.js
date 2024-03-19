import React, {useState} from 'react'


export default function Counter() {
    const [count, setCount] = useState(0);
  return (
    <>
    {count}
    <div>
        <button onClick={()=>setCount(count+1)}>+</button>
        <button onClick={()=>setCount(0)}>Reset</button>
        <button onClick={()=>setCount(count-1)}>-</button>
    </div>
    </>
  )
}
