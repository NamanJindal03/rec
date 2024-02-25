import React, {useState} from 'react'
import TodoForm from './Components/TodoForm'
import TodoDisplay from './Components/TodoDisplay'

export default function App() {
    const [todoList, setTodoList] = useState([]);
    function addTodo(todo){
        setTodoList([...todoList, todo])
    }
  return (
    <>
        <h1>Todo Application</h1>
        <TodoForm addTodo={addTodo}/>
        <TodoDisplay />
    </>
  )
}
