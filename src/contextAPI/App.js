import React, { useState } from 'react'
import Parent1 from './Parent1'
import Parent2 from './Parent2'

import MyContextStore from './context'

export default function App() {
    const [counter, setCounter] = useState(0)
  return (
    <div>
        <MyContextStore.Provider value={{
            counter: counter,
            increament: (val) => setCounter(counter+val)
        }}>
            <Parent1 />
            <Parent2 />
        </MyContextStore.Provider>
    </div>

  )
}

/* 
    {counter: counter}

    ES6 syntax ->
    {counter}
*/
