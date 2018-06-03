var words = ["thriller", "bad", "dangerous", "immortal", "history", "abc"];

var allowedGuesses;
var correctGuesses;
var wrongGuesses;

var wordElement = document.getElementById("words");
var letterCountElement = document.getElementById("letterCount");
var lettersGuessedElement = document.getElementById("lettersGuessed");

//Game start

//variables
var blankArr =[]; //empty array to house blanks in the word

//word is chosen at random

var currentWord = words[Math.floor(Math.random() * words.length)];

allowedGuesses = 13;
wrongGuesses = [];
// create array from currentWord to split the word into seperate strings
wordArr = currentWord.split("");

//add underscores for letters in word
for (var i=0; i < currentWord.length; i++) {
    blankArr.push("_");
}
// var correctGuesses = [];
// for (var i = 0; i < currentWord.length; i++) {
//     correctGuesses.push("_")
// };

// wordElement.innerHTML = correctGuesses.join(" ");
// letterCountElement.innerHTML = allowedGuesses;

// function updateGuesses(letter) {
//     allowedGuesses--; //decrease guesses left
//     letterCountElement.innerHTML = allowedGuesses;

//     if (word.indexOf(letter) === -1) { //letter is not in the word
//         wrongGuesses.push(letter); //update letters guessed
//         lettersGuessedElement.innerHTML = wrongGuesses.join(", ");
//     } else { //letter is in word
//         //replace underscore with letter
//         for (var i = 0; i < currentWord.length; i++) {
//             if (currentWord[i] === letter) {
//                 correctGuesses[i] = letter;
//             }
//         }
//         wordElement.innerHTML = correctGuesses.join(" ");
//     }
// }

// function checkWin() {
//     if (correctGuesses.indexOf("_") === -1) {
//         alert("You Win!");
//     } else if (allowedGuesses === 0) {
//         alert("You Lost!");
//     }
// }

// document.onkeyup = function (event) {
//     var lettersGuessed = String.fromCharCode(event.keyCode).toLowerCase();
//     updateGuesses(lettersGuessed);
//     checkWin();
// };

// //update the blanks




// console.log(currentWord);
// console.log(correctGuesses);
// console.log(allowedGuesses);
// console.log(updateGuesses);
// console.log(wrongGuesses);