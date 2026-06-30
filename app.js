/*-------------------------------- Constants --------------------------------*/
// The words
const Words = ['PLANET', 'ROCKET', 'ORBITS', 'SPACEY', 'GALAXY', 'STARRY', 'PYTHON', 'CODING', 'FRIEND', 'BEAUTY']
const MAX = 6
const stageImages = [
    'assets/stage-0.png',
    'assets/stage-1.png',
    'assets/stage-2.png',
    'assets/stage-3.png',
    'assets/stage-4.png',
    'assets/stage-5.png',
    'assets/stage-6.png',
]

/*-------------------------------- Variables --------------------------------*/

let win = false
let lose = false
let guessed = []
let remainingAttemps = MAX
let word = ""
let LettersArray = []


/*------------------------ Cached Element References ------------------------*/
// link the keyboard html to js
const keyboardEl = document.querySelector('#keyboard')
const wordsEl = document.querySelector('#words')
const TheLetters = document.querySelectorAll('.letters')
const remainingAttempsEl = document.querySelector('.attempts')
const spacemanImgEl = document.querySelector('#spacemanImg')
const resetBtnEl = document.querySelector('.reset')


/*----------------------------- Event Listeners -----------------------------*/

// If i used lowerCase letters not working so should be capital as the words
TheLetters.forEach(function (item) {
    item.addEventListener('click', function () {
        let clickedLetter = item.textContent.toUpperCase()
        guess(clickedLetter)
        item.disabled = true
    });
})

resetBtnEl.addEventListener('click', function () {
    resetGame()
})

/*-------------------------------- Functions --------------------------------*/

function random(array) {
    let randomIndex = Math.floor(Math.random() * array.length)
    return array[randomIndex]
    
}

function lettercut() {
    for (let i = 0; i < word.length; i++) {
        LettersArray.push(word[i])
    }
}

// To the game select random word and make the line with the length of the words
// here I research about the floor :point_down:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
function startGame() {
    word = random(Words)
    lettercut()
    output()

    console.log("The Secret words is: " + word) // just a smoke test for the function, and if i want to cheat 
}

// 
function output() {
    let displayString = ""
    for (let i = 0; i < LettersArray.length; i++) {
        if (guessed.includes(LettersArray[i])) {
            displayString += LettersArray[i] + (" ")
        } else {
            displayString += ("_ ")
        }
    }
    wordsEl.textContent = (displayString)
}

// This function if the user clicked on the right letters it will console the letters if not will decrease the remaining attemps 
// and print game over if the user won will print you win
function guess(letter) {
    if (remainingAttemps <= 0) {
        return
    }
    guessed.push(letter)
    if (LettersArray.includes(letter) === false) {
        remainingAttemps--
        console.log(remainingAttempsEl.textContent = `You have ${remainingAttemps} attempts remaining`)
        console.log("your remaining attemps: " + remainingAttemps)
    }

    output()

    win = true
    for (let i = 0; i < LettersArray.length; i++) {
        if (guessed.includes(LettersArray[i]) === false) {
            win = false
            
        }
    }
    
    if (win === true) {
        remainingAttempsEl.textContent = 'You Win !!!'
    } else if (remainingAttemps === 0) {
        lose = true
        remainingAttempsEl.textContent = "Game Over !!!"
    }else
        console.log("Game Over !!!")
}

// function resetGame() {
//     win = false
//     lose = false
//     remainingAttemps = 6
//     guessed = []
//     LettersArray = []

//     TheLetters.forEach(function (item) {
//         item.disabled = false
//     })
//     startGame()
// }

startGame()
