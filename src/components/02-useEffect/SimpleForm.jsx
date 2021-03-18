import React, { useEffect, useState } from 'react';
import './effects.css';
import { Message } from './Message';

export const SimpleForm = () => {

    const [form, setForm] = useState({
        name:'',
        email:'',
    });

    const {name, email} = form;

    useEffect( ()=>{
        console.log('Hey!');
    } , [] );

    useEffect( ()=>{
        console.log('name cambió!');
    } , [name] );

    useEffect( ()=>{
        console.log('email cambió!');
    } , [email] );

    const handleInputChange = ({target}) =>{
        
        setForm({
            ...form,
            [target.name]: target.value
        });
    }

    return (
        <div>
            <h1>Simple Form (useEffect)</h1>
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
            
            { (name === 'Quim') && <Message />}

        </div>
        
    )
}
