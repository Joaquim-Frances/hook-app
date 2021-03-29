import React, { useContext } from 'react';
import { UserContext } from './UserContext';


export const LoginView = () => {
    const { user, setUser } = useContext(UserContext)


    const login ={
        id: 123,
        userName: 'Quim',
    }

    return (
        <div>
            <h1>Login.</h1>
            <hr/>
        
            <button className='btn btn-primary' onClick={()=>setUser(login)}> Login </button>
            <pre>{JSON.stringify(user)}</pre>
        </div>
    )
}
