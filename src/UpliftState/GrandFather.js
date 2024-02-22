import React, {useState} from 'react'
import Father1 from './Father1'
import Father2 from './Father2'

export default function GrandFather() {
    const [counter, setCounter] = useState(0)
    function updateCounter(count){
        setCounter(count)
    }
  return (
    <>
        <Father1 counter={counter}/>
        <Father2 counter={counter} updateCounter={updateCounter}/>
        <div >
            grand father level
            <button onClick={()=> setCounter(counter+1)}>Add</button>

        </div>
    </>
  )
}
