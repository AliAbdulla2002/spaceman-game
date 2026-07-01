/*-------------------------------- Constants --------------------------------*/
// The words array
const Words = ['PLANET', 'ROCKET', 'ORBITS', 'SPACEY', 'GALAXY', 'STARRY', 'PYTHON', 'CODING', 'FRIEND', 'BEAUTY']

const MAX_ATTEMPTS = 6
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
let remainingAttemps = MAX_ATTEMPTS
let word = ""
let LettersArray = []

/*------------------------ Cached Element References ------------------------*/
// link html to js
const keyboardEl = document.querySelector('#keyboard')
const wordsEl = document.querySelector('#words')
const TheLetters = document.querySelectorAll('.letters')
const remainingAttempsEl = document.querySelector('.attempts')
const spacemanImgEl = document.querySelector('#spacemanImg')
const resetBtnEl = document.querySelector('.reset')
// const Backgroundsound = new Audio(`../assets/audio/${evt.target.id}.mp3`)

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

document.addEventListener('keydown', function(event){
    let pressedkey = event.key.toUpperCase()

    if (pressedkey.length === 1 && pressedkey >= 'A' && pressedkey <= 'Z'){
        guess(pressedkey)
    }

    TheLetters.forEach(function(item){
        if(item.textContent.toUpperCase() === pressedkey){
            item.disabled = true
        }
    })

})

/*-------------------------------- Functions --------------------------------*/
function random(array) {
    return array[Math.floor(Math.random() * array.length)]
}


// To the game select random word and make the line with the length of the words
// here I research about the floor from Mdn https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
function startGame() {
    word = random(Words)
    LettersArray = word.split('')
    output()
    console.log("The Secret words is: " + word) // just a smoke test for the function, and if i want to cheat
}


function output() {
    let displayString = ""
        for (let letter of LettersArray) {
        if (guessed.includes(letter)) {
            displayString += letter + (" ")
        } else {
            displayString += ("_ ")
        }
    }

    wordsEl.textContent = displayString;

    //console.log(remainingAttemps) smoke test to remaining attemps
    // console.log(guessed) smoke test to gussed
    // console.log(displayString) // show the output on the line
}

// just swaps the spaceman image based on how many wrong attempts are used
// set attribute
function updateImage() {
    let wrongGuesses = MAX_ATTEMPTS - remainingAttemps
    spacemanImgEl.setAttribute('src', stageImages[wrongGuesses])
}

// This function if the user clicked on the right letters it will console the letters if not will decrease the remaining attemps
// and print game over if the user won will print you win
function guess(letter) {
    if (remainingAttemps <= 0 || win === true) {
        return
    }


    if (guessed.includes(letter)) {
        return
    }

    guessed.push(letter)

    if (LettersArray.includes(letter) === false) {
        remainingAttemps--
        remainingAttempsEl.textContent = `You have ${remainingAttemps} attempts remaining`
        updateImage()
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
        disableAllLetters()
    } else if (remainingAttemps === 0) {
        lose = true
        remainingAttempsEl.textContent = "Game Over !!!"
        disableAllLetters()
    }
}

// disable the whole keyboard once win or lose happens
function disableAllLetters() {
    TheLetters.forEach(function (item) {
        item.disabled = true
    })
}

// resets all the state back to the start and gets a new random word
function resetGame() {
    win = false
    lose = false
    remainingAttemps = MAX_ATTEMPTS
    guessed = []
    LettersArray = []

    remainingAttempsEl.textContent = `You have ${remainingAttemps} attempts remaining`
    updateImage()

    TheLetters.forEach(function (item) {
        item.disabled = false
    })

    startGame()
}

startGame()