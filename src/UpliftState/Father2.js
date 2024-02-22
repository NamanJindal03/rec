import React, { useState } from 'react'

export default function Father2({counter, updateCounter}) {
    const [tempCounter, setTempCounter] = useState('');
  return (
    <div style={{border: '1px solid red'}}>

        <div >Father 2</div>
        <div >Need a duplicate copy of counter over here:{counter} </div>
        <input 
            type="number" 
            onChange={(e)=>setTempCounter(e.target.value)}
            // onChange={(e) => updateCounter(e.target.value)}
        />
        <button 
            onClick={()=> updateCounter(tempCounter)}>
                Set The counter
        </button>
    </div>
  )
}
