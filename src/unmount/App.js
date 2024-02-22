import React, {useState} from 'react'

function AnotherComponent(){
    return (
        <div>
            I am present on the UI.
        </div>
    )
}

export default function App() {
    const [sample, setSample] = useState(true)
  return (
    <>
        {sample ? <AnotherComponent /> : null}
        <button onClick={()=> setSample(!sample)}>ALter state</button>
    </>
  )
}
