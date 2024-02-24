import React, {useState, useEffect} from 'react'

function AnotherComponent(){
    const [name, setName] = useState('a');
    const [count, setCount] = useState(0);
    //useEffect to solely handle the mount
    useEffect(()=>{
        console.log('the another component got mounted');
        return () => {console.log('The another componetn is about to be unmounted')}
    }, []) //second argument is called as a dependency array

    //useeffeect to solely handle the unmount
    // useEffect(()=>{
        
    // },[])

    useEffect(()=>{
        console.log('I am danger, dont use me')
    })
/* your component has 100 states */
    useEffect(()=>{
        console.log('I am a useEffect, which will get triggered only when name state updates, FYI name even updates on mounted')
    }, [count, name])

    return (
        <div>
            I am present on the UI.
            the state itself <span>{name}</span>
            the state itself <span>{count}</span>
            <button 
                onClick={()=> setName(name+'a')}
            >
                Increase name
            </button>
            <button 
                onClick={()=> setCount(count+1)}
            >
                Increase count
            </button>
        </div>
    )
}

export default function App() {

    const [sample, setSample] = useState(false)

    useEffect(()=>{
        // console.log('I am getting triggered')
    }) //second argument is called as a dependency array
  return (
    <>
        {sample ? <AnotherComponent /> : null}
        <button onClick={()=> setSample(!sample)}>ALter state</button>
    </>
  )
}
