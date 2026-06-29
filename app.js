let nameOfCurrentUser = "";
let win = false;
let lose = false;
let gameTimeOut;
let guessed = [];
let remainingAttemps = 6;
let word = "";

// Additional
let isDarkMode = false;
let isMuted = false;


// The words
const Words = ['SPACEMAN', 'FOOTBALL', 'JAVASCRIPT', 'HTML', 'GENERAL', 'RELAX', 'MIND'];

// The keyboard alphabet
const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split("")

// link the keyboard html to js
const keyboardEl = document.querySelector('#keyboard');

const wordsEl = document.querySelector('#words');

function startGame() {

    // To the game select random word
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
    word = Words [ Math.floor ( Math.random() * Words.length ) ];
    
}