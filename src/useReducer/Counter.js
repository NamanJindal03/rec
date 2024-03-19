import React, {useReducer} from 'react'
import reducer from './reducers/counterReducer'

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
