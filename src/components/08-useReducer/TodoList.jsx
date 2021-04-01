import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = ( {todos, handleDelete, handleToggle} ) => {
    return (
        
        <ul className='list-group list-group-flush'>
            {
                todos.map( (todo, i) => {
                    return(
                        <TodoListItem todo={todo} i={i} handleToggle={handleToggle} handleDelete={handleDelete} key={i} />     
                    )})
            }   
        </ul>
)}
        
    
