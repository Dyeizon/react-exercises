import './style.css';
import { useState } from "react";

export const Counter = () => {
    const [counter, setCounter] = useState(0);

    function increment() {
        setCounter(counter + 1);
    }

    function decrement() {
        setCounter(counter - 1);
    }

    return (
        <div className="counter-container">
            <button className='btn-decrement button-counter' onClick={() => decrement()}>-</button>
            <span className={`counter-number ${counter > 0 ? "positive" : "negative"}`}>{counter}</span>
            <button className='btn-increment button-counter' onClick={() => increment()}>+</button>
        </div>
    );
}