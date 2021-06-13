import React, { useState } from 'react';

const Counter = () => {
    const [ number, setNumber ] = useState(0);

    const onIncrease = () => {
        setNumber(number + 1);
    }

    const onDecrease = () => {
        setNumber(number - 1);
    }

    const onClear = () => {
        setNumber(0);
    }

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
            <button onClick={onClear}>Clear</button>
        </div>
    );
};

export default Counter;