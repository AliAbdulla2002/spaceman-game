/*-------------------------------- Constants --------------------------------*/
// The words
const Words = ['PLANET', 'ROCKET', 'ORBITS', 'SPACEY', 'GALAXY','STARRY', 'PYTHON', 'CODING', 'FRIEND', 'BEAUTY']

/*-------------------------------- Variables --------------------------------*/

let nameOfCurrentUser = ""
let win = false
let lose = false
let gameTimeOut
let guessed = []
let remainingAttemps = 6
let word = ""
let LettersArray = []

// Additional
let isDarkMode = false
let isMuted = false


/*------------------------ Cached Element References ------------------------*/
// link the keyboard html to js
const keyboardEl = document.querySelector('#keyboard')
const wordsEl = document.querySelector('#words')
const TheLetters = document.querySelectorAll('.letters')
console.log(TheLetters)

/*----------------------------- Event Listeners -----------------------------*/

// If i used lowerCase letters not working so should be capital as the words
TheLetters.forEach(function(item) 
{
    item.addEventListener('click', function() 
    {
        let clickedLetter = item.textContent.toUpperCase()
        guess(clickedLetter)
    });
});

// console log for every letters
TheLetters.forEach(function(item){
item.addEventListener('click',function(event){
    console.log("You are clicked: " + event.target.textContent)
})
})

/*-------------------------------- Functions --------------------------------*/

function randomWord(listName) {
    let randomIndex = Math.floor(Math.random() * listName.length)
    return listName[randomIndex]
}

function seprateSeceretLetters() {
    for (let i = 0; i < word.length; i++) {
        LettersArray.push(word[i])
    }
}

// To the game select random word and make the line with the length of the words
// here I research about the floor :point_down:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
function startGame() {
    word = randomWord(Words)
    seprateSeceretLetters()
    output()

    console.log("The Secret words is: "+ word) // just a smoke test for the function, and if i want to cheat 
}

// 
function output() {
    let displayString = ""
    for (let i = 0; i < LettersArray.length; i++) {
        if (guessed.includes(LettersArray[i])) {
            displayString += LettersArray[i] + " "
        } else {
            displayString += "_ "
        }
    }
    wordsEl.textContent = displayString
}


// This function if the user clicked on the right letters it will console the letters if not will decrease the remaining attemps
function guess(letter) {
    guessed.push(letter)
    if (LettersArray.includes(letter) === false) {
        remainingAttemps--
        console.log("your remaining attemps: " + remainingAttemps)
    }
    output()
}

startGame();