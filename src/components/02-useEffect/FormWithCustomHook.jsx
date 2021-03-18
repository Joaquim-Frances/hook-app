import React, { useEffect } from 'react';
import './effects.css';
import { useForm } from './useForm';


export const FormWithCustomHook = () => {

    const [formValues, handleInputChange] = useForm({
        name:'',
        email:'',
        password:'',
    });

    const {name, email, password} = formValues;

    useEffect( ()=>{
        console.log('El email combió!');
    },[email]);

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log('Formulario enviado con éxito!');
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Simple Form With Custom Hook</h1>
            <hr/>
            <div className='form-group'>
                <input 
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu nombre"
                    autoComplete="off"
                    value={ name }
                    onChange={ handleInputChange }
                />
            </div>

            <div className='form-group'>
                <input 
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="tu@email.dot"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }
                />
            </div>

            <div className='form-group'>
                <input 
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="write your secret password"
                    autoComplete="off"
                    value={ password }
                    onChange={ handleInputChange }
                />
            </div>
        <button type='submit'> Enviar </button>
            
        </form>
        
    )
}
