import React, { useState } from 'react';

function CounterFunctionComponent(props) {
    const [count, setCount] = useState(props.value)

    return (
        <div>
            <p>Current value: {count}</p>
            <button onClick={() => setCount(currentCount => currentCount + 1)}>
                Increment
            </button>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <button onClick={() => setCount(currentCount => currentCount - 1)}>
                Decrement
            </button>
        </div>
    )
}

export default CounterFunctionComponent;