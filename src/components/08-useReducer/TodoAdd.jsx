import React from 'react'
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({handleAddTodo}) => {

    const [{ tarea }, handleInputChange, reset] = useForm({
        tarea:'',
    });

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
        handleAddTodo( newTodo );
        reset();
    }

    return (
        <>
        <h3>Agregar Tarea</h3>
        <hr/>
        <form onSubmit={ handleSubmit }>
            <input onChange={handleInputChange} type="text" value={tarea} name="tarea" placeholder="Escribe la tarea..." autoComplete="off" className="form-control"/>
            <button type='submit' className="btn btn-outline-primary mt-1 btn-block"> AGREGAR </button>
        </form>   
        </>
    )
}
