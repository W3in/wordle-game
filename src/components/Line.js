import "../styles/App.css";

export default function Line({ word, guess, isGuessed }) {
    const safeWord = word || "";
    const safeGuess = guess || "";

    return (
        <div className='Grid'>
            {new Array(5).fill(0).map((_, index) => {
                const char = safeGuess[index] || "";

                const bgColor = isGuessed
                    ? safeWord[index] === char
                        ? 'green'
                        : safeWord.includes(char)
                            ? 'gold'
                            : 'black'
                    : 'black';

                return (
                    <div
                        className='GuessBox'
                        key={index}
                        style={{ backgroundColor: bgColor, color: "white" }}
                    >
                        {char.toUpperCase()}
                    </div>
                );
            })}
        </div>
    );
}
