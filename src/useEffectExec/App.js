import React, {useState, useEffect} from 'react'

export default function App() {
    /* this is acting as the parent */
    const [isChild1, setIsChild1] =  useState(true);
    useEffect(()=>{
        console.log('I am initially mounted and then everytime i will be updated')
    },[isChild1])
  return (
    <>
        {isChild1 ? <Child1/> : <Child2 />}
        <button onClick={()=> setIsChild1(!isChild1)}>Toggle Component</button>
    </>
  )
}
function Child1(){
    useEffect(()=>{
        console.log('I am child 1 and I am mounted');
        return () => {return console.log('Alas child 1 had to be destroyed')}
    }, [])
    return (
        <>
            Child1
        </>
    )
}
function Child2(){
    useEffect(()=>{
        console.log('I am child 2 and I am mounted');
        return () => {return console.log('Alas child 2 had to be destroyed')}
    }, [])
    return (
        <>
            Child2
        </>
    )
}