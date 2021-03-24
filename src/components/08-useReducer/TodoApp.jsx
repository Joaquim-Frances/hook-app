import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { useForm } from '../../hooks/useForm';

//styles
import './styles.css';



const init =()=>{

    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

    const [todos, dispatch ] = useReducer(todoReducer, [], init)

    const [{ tarea }, handleInputChange, reset] = useForm({
        tarea:'',
    });

    useEffect(() => {
        
        localStorage.setItem('todos', JSON.stringify( todos ))
       
    }, [todos])
    
    

    const handleSubmit = (e) => {
        e.preventDefault();

        if(tarea.trim().length <= 1){
            return;
        }
        
        const newTodo = {
            id: new Date().getTime(),
            tarea: tarea,
            done: false
        };

        const action = {
            type: 'add',
            payload: newTodo,
        }

        dispatch( action );

        reset();
    }

    return (
        <div>
            <h1>Todo List ( {todos.length} )</h1>
            <hr/>

           <div className="row">
                <div className="col-7">
                    <ul className='list-group list-group-flush'>
                    {
                        todos.map( (todo, i) => {
                            return(
                            <li key={todo.id} className='list-group-item'>
                                <p className='text-center'>{i+1}. {todo.tarea}</p> 
                                <button className='btn btn-danger'> Borrar </button>
                            </li>)
                        })
                    }
                    </ul>
                </div>
                <div className="col-5">
                    <h3>Agregar Tarea</h3>
                    <hr/>

                    <form onSubmit={ handleSubmit }>
                        <input onChange={handleInputChange} type="text" value={tarea} name="tarea" placeholder="Escribe la tarea..." autoComplete="off" className="form-control"/>
                        <button type='submit' className="btn btn-outline-primary mt-1 btn-block"> AGREGAR </button>
                    </form>
                </div>

           </div>
        </div>
    )
}
