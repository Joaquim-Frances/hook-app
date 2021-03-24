import React, { useReducer } from 'react';
import { todoReducer } from './todoReducer';

//styles
import './styles.css';

const initialState = [{
    id: new Date().getTime(),
    tarea: 'Aprender React',
    done: false
}];

export const TodoApp = () => {

    const [todos, dispatch ] = useReducer(todoReducer, initialState)

    
    

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const newTodo = {
            id: new Date().getTime(),
            tarea: 'Nueva Tarea',
            done: false
        };

        const action = {
            type: 'add',
            payload: newTodo,
        }

        dispatch( action );
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
                                <p className='text-center complete'>{i+1}. {todo.tarea}</p> 
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
                        <input type="text" name="tarea" placeholder="Escribe la tarea..." autoComplete="off" className="form-control"/>
                        <button type='submit' className="btn btn-outline-primary mt-1 btn-block"> AGREGAR </button>
                    </form>
                </div>

           </div>
        </div>
    )
}
