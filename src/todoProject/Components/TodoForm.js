import React, {useState} from 'react'
import { v4  } from 'uuid';

export default function TodoForm({addTodo}) {
    const [todoString, setTodoString] = useState("");
    function handleAddTodo(e){
        e.preventDefault();
        if(todoString === ""){
            return alert("Todo cannot be blank")
        }
        const todo = {
            value: todoString,
            isCompleted: false,
            id: v4()
        }
        addTodo(todo)
        setTodoString("");

    }
    return (
        <form>
            <input 
                type="text" 
                value={todoString} 
                onChange={(e)=> setTodoString(e.target.value)}
                placeholder='Todo Item'
            />
            <button onClick={handleAddTodo} type='submit'>Add Todo</button>
        </form>
    )
}
