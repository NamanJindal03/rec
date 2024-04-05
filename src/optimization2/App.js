import { useCallback, useEffect, useState } from "react"
import React from 'react'
import Child from "./Child"

const BASE_PATH = 'https://jsonplaceholder.typicode.com/'

export default function App() {
    const [sample, setSample] = useState(0)

    
    // useCallback(
        const fetchData =   (param) => {
            return fetch(`${BASE_PATH}${param}`)
            .then((data)=>{
                return data.json()
            })
            .then((data)=>{
                console.log(data)
                return data
            })

        }
    //      []
    // )

    useEffect(()=>{
        fetchData('todos');
    },[])
  return (
    <>
        <Child dataGetFunc={fetchData}/>
        <button onClick={()=>{setSample(sample + 1)}}>increase</button>
    </>
  )
}
