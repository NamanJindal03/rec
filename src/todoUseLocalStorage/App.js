import React, { useState } from 'react'
import useLocalStorage from './useLocalStorage';

export default function App() {
    const [todoInput, setTodoInput] = useState('');
    const [todos, setTodos] = useLocalStorage('todos', []) //pass on some info here

    function addTodo(){
        if(todoInput.trim()){
            setTodos([...todos, todoInput]);
            setTodoInput('');
        }
    }
    function deleteTodo(todo){
        const todoIndex = todos.indexOf(todo);
        // console.log(todoIndex);
        const todosCopy = [...todos]
        todosCopy.splice(todoIndex,1);
        setTodos(todosCopy)
    }
  return (
    <>
        <h1>Todo Application</h1>
        <input type="text" value={todoInput} onChange={(e)=>setTodoInput(e.target.value)} />
        <button onClick={addTodo}>Add Todo</button>

        {/* Display todoos */}
        {/* use map and display todos */}
        {todos.map((todo, index)=>{
            return (
                <div key={index}>
                    <span>{todo}</span>
                    <button onClick={()=>deleteTodo(todo)}>delete</button>
                </div>
            )
        })}
    </>
  )
}
