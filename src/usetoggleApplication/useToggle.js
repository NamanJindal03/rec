/* this being accting as our custom hook */
import React, { useState } from 'react'

export default function useToggle(initialState) {
    const [toggableValue, setToggableValue] = useState(initialState);

    function toggleValue(){
        setToggableValue(!toggableValue);
    }

    return [toggableValue, toggleValue];
  
}
