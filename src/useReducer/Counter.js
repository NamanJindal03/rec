import React, {useReducer} from 'react'

function reducer(state){
    console.log(state);
    return state +1;
}

export default function Counter() {
    const [state, dispatch] = useReducer(reducer, 0);
  return (
    <>
        {state}
        <button onClick={dispatch}>random</button>
    </>
  )
}
