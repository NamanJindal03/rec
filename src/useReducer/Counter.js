import React, {useReducer} from 'react'

function reducer(state, action){
    switch(action.type){
        case 'increment':
            return state + action.payload
        case 'decrement':
            return state - action.payload
        case 'reset':
            return 0
        default: 
            return state
    }
    // console.log(state);
    // return state+ payload;
}

export default function Counter() {
    const [state, dispatch] = useReducer(reducer, 0);
  return (
    <>
        
        <button onClick={()=>dispatch({type: 'increment', payload: 1})}>+</button>
        {state}
        <button onClick={()=>dispatch({type: 'decrement', payload: 1})}>-</button>
    </>
  )
}
