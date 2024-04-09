import React from 'react'
import useLocalStorage from './useLocalStorage';

export default function KeyValueComp({key1, initialValue}) {
    console.log(key1);
    console.log(initialValue)
    const [state, setState, deleteFromLS] = useLocalStorage(key1, initialValue);
    function changeLSValue(newValue){
        setState(newValue)
    }

  return (
    <>
    
        <input type="text" onChange={(e)=> changeLSValue(e.target.value)} value={state}/>
        <button onClick={deleteFromLS}>Delete key presenece</button>
    </>
  )
}
