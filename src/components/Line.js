import React from 'react';
import "../styles/App.css";

export default function Line({ word, guess, isGuessed }) {
    return (
        <div className='Grid'>
            {new Array(5).fill(0).map((_, index) => {
                const bgColor = isGuessed
                    ? word[index] === guess[index]
                        ? 'green'
                        : word.includes(guess[index])
                            ? 'gold'
                            : 'black'
                    : 'black';

                return (
                    <div
                        className='GuessBox'
                        key={index}
                        style={{ backgroundColor: bgColor }}
                    >
                        {guess[index]}
                    </div>
                );
            })}
        </div>
    );
}
