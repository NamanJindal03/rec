import React,{useContext} from 'react'
import MyContextStore from './context';

export default function Child2() {
    const myContextStoreState = useContext(MyContextStore);
    console.log(myContextStoreState);
  return (
    <>
        <div>Child2</div>
        <div>{myContextStoreState.counter}</div>
        <button onClick={()=>myContextStoreState.increament(2)}>Increment by 2</button>
    </>
  )
}
