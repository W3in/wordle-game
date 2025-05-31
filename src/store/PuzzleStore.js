import words from '../data/data.json'

export default {
    word: '',
    guesses: [],
    currentGuess: 0,
    get Won() {
        return this.guesses[this.currentGuess - 1] === this.word;
    },
    get Lose() {
        return !this.Won && this.currentGuess === 6;
    },
    init() {
        this.word = words[Math.floor(Math.random() * words.length)];
        this.guesses = new Array(6).fill('');
        this.currentGuess = 0;
    },
    get allGuesses() {
        return this.guesses.slice(0, this.currentGuess).join('').split('');
    },

    get exactGuesses() {
        return this.word.split('').filter((letter, i) => {
            return this.guesses
                .slice(0, this.currentGuess)
                .map(word => word[i])
                .includes(letter);
        });
    },

    get inexactGuesses() {
        return this.word.split('').filter(
            (letter, i) =>
                this.allGuesses.includes(letter) &&
                !this.exactGuesses.includes(letter)
        );
    },
    submitGuess() {
        if (this.guesses[this.currentGuess].length === 5) {
            this.currentGuess++;
        }
    },
    handleKeyUp(e) {
        if (this.Won || this.Lose) {
            return;
        }
        if (e.key === 'Enter') {
            return this.submitGuess();
        }
        if (e.key === 'Backspace') {
            this.guesses[this.currentGuess] = this.guesses[this.currentGuess].slice(0, this.guesses[this.currentGuess].length - 1);
            return;
        }
        if (this.guesses[this.currentGuess].length < 5 && /^[A-Z]$/.test(e.key.toUpperCase())) {
            this.guesses[this.currentGuess] += e.key.toLowerCase();
        }
    },
}