import React, {useReducer} from 'react'
import reducer from './reducers/counterReducer'
import { INCREMENT, DECREMENT, RESET } from './actionTypes';

export default function Counter() {
    const [state, dispatch] = useReducer(reducer, {count: 0, count2: 0});
  return (
    <>
        <button onClick={()=>dispatch({type: INCREMENT, payload: 1})}>+</button>
        {state.count}
        <button onClick={()=>dispatch({type: DECREMENT, payload: 1})}>-</button>
        <button onClick={()=>dispatch({type: RESET})}>reset</button>

        <div>
            {/* <div>handle count 2</div>
            {state.count2} */}
        {/* <button onClick={()=>dispatch({type: 'incrementCount2', payload: ['count2', 1]})}>+</button> */}

        </div>
    </>
  )
}
