import React, {useState} from 'react'


let sampleCheck = 0;
export default function App() {
    // let state = useState(0);
    let normalVariable = 0;
    const [state1, setState] = useState(0);

    /* 
        this is not the exact code -> probabilty
    
    */


    /* 
        state[0] === state1
        state[1] === setState
    
    */
  return (
    <>
        {/* <div>
            {state[0]}
        </div> */}
        <div>
        state1 {state1}
        </div>
        <div>
            normalVariable {normalVariable}
        </div>
        <div>
            sample check {sampleCheck}
        </div>
       
        {/* <button onClick={()=>{ 
            console.log(state[0])
            state[0] = state[0]+1;
        }}>btn1</button> */}
        <button onClick={()=>{ 
            console.log('state', state1);
            setState(state1 + 1)
        }}>state counter update</button>
        <button onClick={()=>{ 
            console.log('normal',normalVariable);
            normalVariable = normalVariable + 1
        }}>normal counter update</button>

        <button onClick={()=>{ 
            console.log('smaple cheklc',sampleCheck);
            sampleCheck = sampleCheck + 1
        }}>sample check update</button>
    </>
  )
}
