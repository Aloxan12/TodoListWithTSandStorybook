import React, {useState} from 'react';
import styles from './Counter.module.scss'

export const Counter = () => {
    const [count, setCount] = useState(0)

    const incrementHandler = ()=>{
        setCount(prevState => prevState + 1)
    }

    return (
        <div className={styles.counter}>
            <div>{count}</div>
            <div>
                <button onClick={incrementHandler}>+</button>
            </div>
        </div>
    );
}