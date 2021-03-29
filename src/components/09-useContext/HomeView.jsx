import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const HomeView = () => {

    const {user} = useContext(UserContext);

    console.log(user);

    return (
        <div>
            <h1>Home.</h1>
            <hr/>

            <pre className='container'>
                {JSON.stringify(user, null, 3)}
            </pre>
        </div>
    )
}
