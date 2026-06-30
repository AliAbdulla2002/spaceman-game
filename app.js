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

/*-------------------------------- Functions --------------------------------*/
// To the game select random word and make the line with the length of the words
// here I research about the floor 👇
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
function startGame() {
    word = Words [ Math.floor ( Math.random() * Words.length ) ]
    
    // Make the dashs by word length 
    let emptylines = "";
    for (let i = 0; i < word.length; i++) 
    {
        emptylines += "_ "
    }
    wordsEl.textContent = emptylines

    console.log("The Secret words is: "+ word) // just a smoke test for the function, and if i want to cheat 
}


// console log for every letters
TheLetters.forEach(function(item){
item.addEventListener('click',function(event){
    console.log("You are clicked: " + event.target.textContent)
})
})


startGame();
