import words from '../data/data.json'

export default {
    word: '',
    guesses: [],
    currentGuess: 0,
    get Won() {
        return this.guesses[this.currentGuess - 1] === this.word;
    },
    get Lose() {
        return this.currentGuess === 6;
    },
    init() {
        this.word = words[Math.floor(Math.random() * words.length)];
        this.guesses.replace(new Array(6).fill(''));
        this.currentGuess = 0;
    }
}