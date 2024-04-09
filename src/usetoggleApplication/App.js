import React from 'react'
import useToggle from './useToggle';

export default function App() {
    const [isVisible, toggleVisibility] = useToggle(false);
  return (
    <>
        <button onClick={toggleVisibility}>Toggle Visibility</button>
        {isVisible && <p>para is visible</p>}
    </>
  )
}
