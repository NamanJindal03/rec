import React, { useState } from 'react'
import KeyValueComp from './KeyValueComp'

export default function App() {
    const [key, setKey] = useState('');
    const [initialValue, setInitialValue] = useState('');
    const [isStatus, setIsStatus] = useState(false);
  return (
    <>
        <input type="text"  value={key} onChange={(e)=>setKey(e.target.value)}/>
        <input type="text"  value={initialValue} onChange={(e)=>setInitialValue(e.target.value)}/>
        <button onClick={()=> setIsStatus(true)} disabled={isStatus}>Get Status</button>
        {isStatus && <KeyValueComp key1={key} initialValue={initialValue}/>}
    </>
  )
}
