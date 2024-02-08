import React, { useState } from "react";


const Counter = () => {
    const [counter, setCounter] = useState(0);

    const handleIncrement = () => {
        setCounter(counter + 1)
    }
    const handleDecrement = () => {
        setCounter(counter - 1)
    }
    return(
        <div className="container mb-5">
            {counter}
            <button onClick={handleIncrement}>Increment </button>
            <button onClick={handleDecrement}>Decrement </button>
        </div>
    )
}

export default Counter