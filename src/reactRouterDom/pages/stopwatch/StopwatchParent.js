import React, {useState} from 'react'
import SW1 from './SW1'

export default function StopwatchParent() {
    const [isSW1, setWS1] = useState(true);
  return (
    <>
        {isSW1 && <SW1 />}
        <button onClick={()=> setWS1(!isSW1)}>{isSW1 ? "unmount" : "mount"}</button>
    </>
  )
}
