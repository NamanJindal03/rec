import React from 'react'
/* Props terminology */
function Sample({prop1, prop2}){
    /* object  -> props1 and props2 */
    return (
        <>
            <div>
                {prop1}
            </div>
            <div>
                {prop2}
            </div>
        </>
    )
}

export default function App() {
  return (
    <>
        <Sample prop1={"p1"} prop2={"p2"}/>
    </>
  )
}
