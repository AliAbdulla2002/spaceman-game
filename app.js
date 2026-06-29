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
const Words = ['PLANET', 'ROCKET', 'ORBITS', 'SPACEY', 'GALAXY','STARRY', 'PYTHON', 'CODING', 'FRIEND', 'BEAUTY'];

// link the keyboard html to js
const keyboardEl = document.querySelector('#keyboard');

const wordsEl = document.querySelector('#words');

function startGame() {

    // To the game select random word and make the line with the length of the words
    // here I research about the floor 👇
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
    word = Words [ Math.floor ( Math.random() * Words.length ) ];
    // Make the dashs by word length 
    wordsEl.textContent = ("_ ".repeat)(word.length);
    console.log("The Secret words is: "+ word);
    
}

startGame();