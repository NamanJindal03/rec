import React, { useEffect, useState } from 'react'

export default function useLocalStorage(key1, defaultValue) {
    const [isDeleteTriggered, setIsDeleteTriggered] = useState(false)
    const [state, setState] = useState(()=>{
        console.log(key1);
        console.log(defaultValue);
        let value;
        try{
            value = JSON.parse(localStorage.getItem(key1) || JSON.stringify(defaultValue))
        }
        catch(err){
            // console.log('something went wrong');
            value = '';
        }
        return value;
    })
    useEffect(()=>{
        localStorage.setItem(key1, state);
        if(isDeleteTriggered){
            setIsDeleteTriggered(true)
        }
    }, [state])
    function deleteFromLS(){
        setIsDeleteTriggered(true);
        localStorage.removeItem(key1);
        setState('');
    }
  return [state, setState, deleteFromLS]
}
