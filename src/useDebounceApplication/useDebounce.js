import React, {useEffect, useState} from 'react'

export default function useDebounce(val, timer) {
    const [state, setState] = useState(val);
    // console.log(state)
    // console.log(val);
    // console.log(timer);
    useEffect(()=>{
        const id = setTimeout(()=>{
            setState(val)
        }, timer)

        return ()=> {
            clearTimeout(id)
        }
    },[val, timer])
    return state;

}
