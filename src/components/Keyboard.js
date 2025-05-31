import "../styles/App.css";
import PuzzleStore from "../store/PuzzleStore";
export default function Keyboard() {
    const qwerty = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'];
    return (
        <div>
            {
                qwerty.map((row) => (
                    <div className='KeyboardRow'>
                        {row.split('').map((char) => {
                            let bgColor = "rgba(128, 128, 128, 0.2)";

                            if (PuzzleStore.exactGuesses.includes(char)) {
                                bgColor = "green";
                            } else if (PuzzleStore.inexactGuesses.includes(char)) {
                                bgColor = "gold";
                            } else if (PuzzleStore.allGuesses.includes(char)) {
                                bgColor = "rgba(128, 128, 128, 0.8)";
                            }
                            return (
                                <div className='KeyboardText'
                                    key={char}
                                    style={{ backgroundColor: bgColor }}
                                >{char}</div>
                            );
                        })}
                    </div>
                ))
            }
        </div>
    );
}

