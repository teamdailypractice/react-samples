import React, { useState } from 'react';

function ManyStates(props) {
    const [age, setAge] = useState(props.age);
    const [fruit, setFruit] = useState('banana');
    const [todos, setTodos] = useState([{ text: age.toString() + '-Learn Hooks' }]);

    return (
        <div>
            <p>My age: {age} favourite fruit: {fruit} tasks: {todos[0].text} </p>
            <button onClick={() => {
                setAge(age + 1);
                setFruit("papaya");
                setTodos([{ text: (age + 1).toString() + "-Learn Hooks" }, ...todos]);
            }}>
                Click me
            </button>
        </div>
    )
}

export default ManyStates;