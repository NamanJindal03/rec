import React, {useEffect, useRef, useState} from 'react'

export default function App() {
    const [state, setState] = useState(10);
    const ref1 = useRef();
    const ref2 = useRef();

    function refValueDisplay(){
        console.dir(ref1.current)
        ref1.current.value ="I am changed"
        ref2.current.value ="Even I am changed"
        // console.log(ref1.current);
        // console.log(ref2.current);
    }

    useEffect(()=>{
        ref1.current.focus();
    },[])

    function blur(){
        ref1.current.value ="unfocus"
    }

    function focus(){
        ref1.current.value = "focused"
    }
  return (
    <>
    
        {/* <div>App</div>
        <label htmlFor="">Ref 1 label</label>
        <input type="text" ref={ref1} id="one"/>

        <label htmlFor="">Ref 2 label</label>
        <input type="text" ref={ref2} id="two"/>

        <button onClick={refValueDisplay}>Ref value display in log</button> */}

        <input type="text" onBlur={blur} onFocus={focus} ref={ref1}/>
    </>
  )
}
