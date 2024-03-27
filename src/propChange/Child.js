import React, { useEffect, useState } from 'react'

export default function Child({sampleState}) {
    const [internalState, setInternalState] = useState(sampleState);
    useEffect(()=>{
        setInternalState(sampleState)
    },[sampleState])
  return (
    <div>
        InternalState : {internalState}
    </div>
  )
}
