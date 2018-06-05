// Create Variables
var words = [{
        winWord: "thriller",
        winImg: "assets/images/Thriller.png"
    },
    {
        winWord: "bad",
        winImg: "assets/images/Bad.jpg"
    },

    {
        "winWord": "dangerous",
        "winImg": "assets/images/Dangerous.jpg"
    },
    {
        "winWord": "immortal",
        "winImg": "assets/images/Immortal.jpg"
    },
    {
        "winWord": "history",
        "winImg": "assets/images/history.jpg"
    },
    {
        "winWord": "abc",
        "winImg": "assets/images/ABC.png"
    },
];

const maxTries = 15; //maximum number of tries
var currentWord; //word chosen at random
var guessedLetters; //stores the letters that the user has guessed
var wordArr = [];
var guessingWord; //stores the letters that have been properly guessed
var win = 0;
var loss = 0;
var gameStarted = false;
var hasFinished = false;
var remainingGuesses = 0;


//Game setup

//functions
function resetGame() {
    remainingGuesses = maxTries;
    gameStarted = false;

    //remove image
    document.getElementById("winImg").src = "assets/images/michaeljackson_background.png";
    //choose random word
    currentWord = words[Math.floor(Math.random() * words.length)];

    console.log(currentWord.winWord);

    //define empty arrays
    guessedLetters = [];
    guessingWord = [];

    //Create blanks for each letter in the random word
    for (var i = 0; i < currentWord.winWord.length; i++) {
        guessingWord.push("_");
    }
    console.log(guessingWord);

    //Show display
    updateDisplay();
};

//function that checks the guessed letter against the current word

function makeGuess(letter) {
    if (remainingGuesses > 0) {
        if (guessedLetters.indexOf(letter) === -1) {
            guessedLetters.push(letter);
            remainingGuesses--;
            evaluateGuess(letter);
            console.log(remainingGuesses);
        } 
    }
    updateDisplay();
    checkWin();
};
//This function finds the letter and replaces them in the guess word.
function evaluateGuess(letter) {

    //Loop through word finding all instances of guessed letter

    for (var i = 0; i < currentWord.winWord.length; i++) {
        if (currentWord.winWord[i] === letter) {
            guessingWord[i] = letter;

        }
    }

};

//Updates the display on the HTML Page
function updateDisplay() {

    document.getElementById("current-word").innerText = "";
    for (var i = 0; i < currentWord.winWord.length; i++) {
        document.getElementById("current-word").innerText += guessingWord[i];
    }
    document.getElementById("remainingGuesses").innerText = remainingGuesses;
    document.getElementById("guessedLetters").innerText = guessedLetters;
};

function checkWin() {
    if (guessingWord.indexOf("_") === -1) {
        console.log(guessingWord);
        console.log(currentWord.winWord);

        //compare the guessingWord with words.winWords array in an if statement then display the image of the word

        alert("You Win!");
        win++;
        document.getElementById("wins").innerText = win;
        hasFinished = true;
        //change image to win image

        // document.getElementById("winImg").src = words[winWord].winImg;
        console.log("total wins =", +win);
    } else if (remainingGuesses === 0) {
        alert("You lose!");
        loss++
        document.getElementById("loss").innerText = loss;
    }
};
// function with key press
document.onkeyup = function (event) {
    //only accept letter keys and change case
    var letter = String.fromCharCode(event.keyCode).toLowerCase();

    if (event.keyCode >= 65 && event.keyCode <= 90) {
        makeGuess(letter);

        console.log("you pressed " + letter);

    }
};