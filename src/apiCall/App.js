import React, {useEffect} from 'react'

export default function App() {
    const getTodoData = async () => {
        try{
            const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
            console.log(response)
            if(!response.ok){
                throw new Error("something went wrong")
            }
            console.log(response)
            console.log(response.json)
            const todo = await response.json();
            console.log(todo)
        }
        catch(err){
            console.error("Error fetching the api", err)
        }
    }
    useEffect(()=>{
        getTodoData();
    }, [])
  return (
    <div>App</div>
  )
}
