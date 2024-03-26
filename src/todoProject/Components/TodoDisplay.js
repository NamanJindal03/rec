import React from 'react'
import TodoItem from './TodoItem'

export default function TodoDisplay({todoList, toggleCompleted,deleteTodo}) {
  return (
    <>
        {
            todoList.map((todo)=>{
                return 
                <TodoItem 
                  todo={todo} 
                  toggleCompleted={toggleCompleted} 
                  deleteTodo={deleteTodo}
                />
            })
            
        }
    </>
  )
}
