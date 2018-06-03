// Create Variables
var words = ["thriller", "bad", "dangerous", "immortal", "history", "abc"];

const maxTries = 10; //maximum number of tries
var currentWord; //word chosen at random
var guessedLetters; //stores the letters that the user has guessed
var wordArr = [];
var guessingWord; //stores the letters that have been properly guessed
var win = 0;
var gameStarted = false;
var hasFinished = false;
var remainingGuesses = 0;

//Game setup

//functions
function resetGame() {
    remainingGuesses = maxTries;
    gameStarted = false;

    //choose random word
    currentWord = words[Math.floor(Math.random() * words.length)];

    console.log(currentWord);

    //define empty arrays
    guessedLetters = [];
    guessingWord = [];

    //Create blanks for each letter in the random word
    for (var i = 0; i < currentWord.length; i++) {
        guessingWord.push("_");
    }
    console.log(guessingWord);
    // // split word into individual characters

    // wordArr = currentWord.split("");
    // console.log(wordArr);

    //Show display
    updateDisplay();
};

//function that checks the guessed letter against the current word

function makeGuess(letter) {
    if (remainingGuesses > 0) {
        if (guessedLetters.indexOf(letter) === -1) {
            guessedLetters.push(letter);
            evaluateGuess(letter);
        }
    }
    updateDisplay();
    checkWin();
}
//This function finds the letter and replaces them in the guess word.
function evaluateGuess(letter) {
    //Array to store position of letters in string

    var positions = [];

    //Loop through word finding all instances of guessed letter

    for (var i = 0; i < currentWord.length; i++) {
        if (currentWord[i] === letter) {
            positions.push(i);
        }
    }
    //if letter is not in word, add letter to guessed letters
    if (positions.length <= 0) {
        remainingGuesses--;
    } else {
        //loop through and replace blanks with letter
        for (var i = 0; i < positions.length; i++) {
            guessingWord[positions[i]] = letter;
        }
    }
    console.log(positions);
};

//Updates the display on the HTML Page
function updateDisplay() {
    // document.getElementById("wins").innerText = wins;
    document.getElementById("current-word").innerText = "";
    for (var i = 0; i < currentWord.length; i++) {
        document.getElementById("current-word").innerText += guessingWord[i];
    }
    document.getElementById("remainingGuesses").innerText = remainingGuesses;
    document.getElementById("guessedLetters").innerText = guessedLetters;
};

function checkWin () {
    if(guessingWord.indexOf("_") === -1) {
        alert("You Win!");
        win++;
        hasFinished = true;
    }
};
// function with key press
document.onkeyup = function (event) {
    //only accept letter keys and change case
    var letter = String.fromCharCode(event.keyCode).toLowerCase();

    if (event.keyCode >= 65 && event.keyCode <= 90) {
        makeGuess();

        console.log("you pressed " + letter);

        //add letter to the empty array
        guessedLetters.push(" " + letter);
        console.log(guessedLetters);
    }
};