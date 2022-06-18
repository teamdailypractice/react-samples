import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";

function NumberGuessing() {
    const [guess, setGuess] = useState('');
    const [score, setScore] = useState(0);

    console.log('guessed:' + guess);

    const checkNumber = () => {
        const randomNumber = Math.floor(Math.random() * 10) + 1;
        if (Number(guess) === randomNumber) {
            setScore(score + 1);
        }
    }

    return (
        <>
            <div className="l-list__item">
                <div className="post-summary h-entry">
                    <label>What number (between 1 and 10) am I thinking of?:</label>
                    <br />
                    <input value={guess}
                        type="number"
                        min="1"
                        max="10"
                        onChange={(e) => setGuess(e.target.value)}
                    />
                    <br />
                    <button onClick={checkNumber}>Guess!</button>
                    <p>Your Score: {score}</p>
                </div>
            </div>
            <div className="l-list__item">
                <div className="post-summary h-entry">
                    <label>What number (between 1 and 10) am I thinking of?:</label>
                    <br />
                    <input value={guess}
                        type="number"
                        min="1"
                        max="10"
                        onChange={(e) => setGuess(e.target.value)}
                    />
                    <br />
                    <button onClick={checkNumber}>Guess!</button>
                    <p>Your Score: {score}</p>
                </div>
            </div>
        </>

    )
}

export default NumberGuessing;