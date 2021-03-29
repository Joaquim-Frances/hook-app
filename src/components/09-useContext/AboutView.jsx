import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const AboutView = () => {
    const {user, setUser} = useContext(UserContext);

    return (
        <div>
            <h1>About.</h1>
            <hr/>

            <pre>
                {JSON.stringify(user)}
            </pre>

            <button className='btn btn-primary' onClick={()=>setUser(null)}>
                Logout
            </button>
        </div>
    )
}
