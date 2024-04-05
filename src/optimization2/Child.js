import React, { useEffect } from 'react'

function Child({dataGetFunc}) {
    useEffect(()=>{
        console.log('getting called')
    },[dataGetFunc])
  return (
    <div>Child</div>
  )
}

export default React.memo(Child)