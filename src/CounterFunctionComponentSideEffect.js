import React, { useState, useEffect } from 'react';

function CounterFunctionComponentSideEffect(props) {

    const [count, setCount] = useState(props.value)

    useEffect(() => {
        document.title = `You clicked ${count} times`;
    });

    return (
        <div>
            <p>Current value: {count}</p>
            <button onClick={() => setCount(x => x + 1)}>
                Increment
            </button>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <button onClick={() => setCount(x => x - 1)}>
                Decrement
            </button>
        </div>
    )
}

export default CounterFunctionComponentSideEffect;