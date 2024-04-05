import React from 'react'

function Child1({arr}) {
    console.log('rerendered')
  return (
    <div>{arr} child</div>
  )
}

export default React.memo(Child1)