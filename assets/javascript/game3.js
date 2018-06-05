var words = ["thriller", "bad", "dangerous", "immortal", "history", "abc"];
var wrongLetters = [];
var correctLetters = [];
var repeatLetters = [];
var userGuess;
var wordArr = [];
var blanksArr = [];

// choose a word
var currentWord = words[Math.floor(Math.random() * words.length)];

wordArr = currentWord.split("");

for (var i = 0; i < currentWord.length; i++) {
    blanksArr.push("_");
    console.log(blanksArr);
}
console.log(currentWord);
console.log(wordArr);

//This function is run whenever the user presses a key.
document.onkeyup = function (event) {
    var guessLetter = String.fromCharCode(event.keyCode).toLowerCase();
    console.log("you pressed " + guessLetter);

    //add wins, losses, reset, guesses left


    //substituting the letters for the blanks upon correct guess
    for (var i = 0; i < wordArr.length; i++) {
        if (guessLetter === wordArr[i]) {
            blankArr[i] = guessLetter;
            document.querySelector("#correctguesses").innerhtml = blankArr;
        }
    }
};





//substitute letter for the blanks




// write html
// document.querySelector("#guessLetter").innerHTML = html;
// document.getElementById("#currentGuess").innerHTML = blanksArr.join(" ");
// blanksArr for Key Press
// userGuess = "e";
// for (var i = 0; i < currentWord)
// };


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