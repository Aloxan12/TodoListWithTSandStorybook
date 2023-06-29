import React, {useState} from 'react';
import './Counter.scss'

export const Counter = () => {
    const [count, setCount] = useState(0)

    const incrementHandler = ()=>{
        setCount(prevState => prevState + 1)
    }

    return (
        <div className='counter'>
            <div>{count}</div>
            <div>
                <button onClick={incrementHandler}>+</button>
            </div>
        </div>
    );
}