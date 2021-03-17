import React, { useState } from 'react';
import './Counter.css';

export const CounterApp = () => {

    const [counter, setCounter] = useState( 10 );

    return (
        <div>
            <h1>Counter { counter }</h1>
            <hr/>
            <button className="btn btn-primary" onClick={
                ()=>{
                    setCounter(counter +1);
                }
            }> + 1 </button>
        </div>
    )
}
