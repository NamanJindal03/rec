import React,{useEffect, useState, useRef} from 'react'
// let timer;
export default function SW1() {
    const [count, setCount] = useState(10);
    const [timer, setTimer] = useState('');
    const ref = useRef('');
    console.log(ref);
    // useEffect(()=>{
    //     if(count !== 0){
    //         setTimeout(()=>{
    //             setCount((prev)=> prev-1)
    //         }, 1000)
    //     }
    // },[count])
    useEffect(()=>{
        ref.current = setInterval(()=>{
            console.log('clicked clicked')
            setCount((prev)=> prev-1)
        }, 1000)
        // setTimer(internalTimer);
        return () => clearInterval(ref.current )
    },[])
    useEffect(()=>{
        if(count === 0){
            clearInterval(ref.current)
        }
    },[count])
  return (
    <div>
        {count}
    </div>
  )
}
