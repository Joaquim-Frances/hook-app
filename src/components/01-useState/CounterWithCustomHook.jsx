import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import './Counter.css';

export const CounterWithCustomHook = () => {

    const {state, increment, decrement, reset } = useCounter( 108 );

    return (
        <div>
            <h1>Counter With Hook { state }</h1>
            <hr/>
            <button className="btn" onClick={()=>increment(4)}> + 1 </button>
            <button className="btn" onClick={ reset }> Reset </button>
            <button className="btn" onClick={()=>decrement(5)}> - 1 </button>
        </div>
    )
}
