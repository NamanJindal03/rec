import React, { useState } from 'react'
import useDebounce from './useDebounce'

export default function App() {
    const [value, setValue] = useState('');
    const debouncedValue = useDebounce(value, 2000);

    return (
      <>
          <input type="text" value={value} onChange={(e)=>setValue(e.target.value)}/>
          <h1>The debounced value would be</h1>
          <p>{debouncedValue}</p>
      </>
    )
}
