var words = ["thriller", "bad", "dangerous", "immortal", "history", "abc"];

// choose a word
var currentWord = words[Math.floor(Math.random() * words.length)];

console.log(currentWord);

//This function is run whenever the user presses a key.
document.onkeyup = function (event){
var guessLetter = event.key;
document.querySelector ("#guessLetter").innerHTML = html;



var wrongLetters = [];
var correctLetters = [];
var repeatLetters = [];
var guesses = Math.round((currentWord.length) + (.5 * currentWord.length));
var placeHolder = [];
    for (var i = 0; i < currentWord.length; i++) {
        placeHolder.push("_");
    }

    document.getElementById("#currentGuess").innerHTML = placeHolder.join(" ");

console.log(guesses);
};


// answer blanks
// var answerArray = [];
// for (var i = 0; i < currentWord.length; i++) {
//     answerArray[i] = "_";
// }
// console.log(answerArray);

// document.getElementById("answerArray").innerHTML = answerArray.values;

// var remainingLetters = songs.length;
// //letters left to be guessed


// // while (remainingLetters > 0) {
// //     // Game code goes here
// //     // Show the player their progress
// //     answerArray.join("");
// //     // Get a guess from a player
// //     var guess = document.getElementById("user-text");

// //     document.onkeyup = function (event) {
// //         guess.textContent = event.key;
// //     };

// //     for (var j = 0; j < currentWord.length; j++) {
// //         if (currentWord[j] === guess) {
// //             answerArray[j] = guess;
// //             remainingLetters--;
// //         }

// //     }


// console.log(currentWord);
// console.log(answerArray);
// console.log(remainingLetters);
// console.log(progress);