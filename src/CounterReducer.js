import React, { useReducer } from 'react'


const initialState = { count: 0 };

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            throw new Error();
    }
}

function CounterReducer() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            Count: {state.count}
            <br />
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
        </div>
    );
}

export default CounterReducer;