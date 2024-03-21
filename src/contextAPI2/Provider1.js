import React, {useState} from 'react'
import MyContextStore from './context'

export default function Provider1({children}) {
    const [counter, setCounter] = useState(0)

  return (
    <MyContextStore.Provider value={{
        counter: counter,
        increament: (val) => setCounter(counter+val)
    }}>
        {children}
    </MyContextStore.Provider>
  )
}
