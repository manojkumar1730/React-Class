import React, { useState } from 'react'
import '../hooks.css'
const CounterApp = () => {

    let [Count, setCount] = useState(0)

    let decrement = () => {
        if (Count > 0)
            setCount(Count - 1)
        else
            alert("Invalid count")
    }
    let increment = () => {
        setCount(Count + 1)
    }
    return (
        <div className="hooks">
            <div className="header">
                <h1>Counter App</h1>
            </div>
            <div className="counter-app">
                <button onClick={increment}>
                    increment
                </button>
                <h2>{Count}</h2>
                <button onClick={decrement}>
                    decrement
                </button>
            </div>
        </div>
    )
}

export default CounterApp