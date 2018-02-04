var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var wordBank = ["Everest", "Denali", "Kilimanjaro", "Aconcagua", "Elcapitan", "Whiteface", "Montblanc", "Grandfather", "Mitchell"];
var wins = 0;
var losses = 0;
var numberChances = 6;
var wrongGuess = [];
var randomWord = "";

document.addEventListener("DOMContentLoaded", function() {
 setUp()
}, false);


function setUp (){
wrongGuess = [];
numberChances = 6;
randomWord = wordBank[Math.floor(Math.random()*wordBank.length)];
var underscoreText = "";
for(var i = 0; i < randomWord.length; i ++){
  underscoreText += " _";
}

document.getElementById("guessPanel").innerHTML = underscoreText; 
}


 // user presses a key.
document.onkeypress = function(event) {
      var userGuess = event.key;

      isInAlphabet(userGuess);
    }
// make sure user guess was in alphabet

function isInAlphabet(userGuess) {
  for(var i = 0; i < alphabet.length; i++){
    if ((userGuess  == alphabet[i].toLowerCase()) ||  (userGuess  == alphabet[i].toUpperCase())) {
    }

  }

}

//correct guess
function isGuessCorrect(userGuess) {
    if (randomWord.charAt(0)) {
    for (var i = 0; i < randomWord.length; i++){

// }
    }
  }
}
// to replace underscore with correctly guessed letter

function replaceUnderscore(userGuess) {
  for(var i = 0; i < randomWord.length; i++){
   if (this.wordBank.charAt(i) === guess) {
        this.randomWord[i] = guess;

      } 
    }
}




// function updateGuesses(userGuess) {
//   numberChances--; // decrement guesses left
//   letterCountElement.innerHTML = numberChances;
//   // letter is not in the word
//   // update letters guessed
//   if (randomWord.indexOf(letter) === -1) { 
//     wrongGuesses.push(letter); 
//     lettersGuessedElement.innerHTML = wrongGuess.join(', ');

//   }
// // letter is in the word
//   // replace underscore with the letter
//   else { 
//     for (var i = 0; i < randomWord.length; i++) {
//       if (randomWord[i] === letter) {
//         correctGuesses[i] = letter;
//       }
//     }
// }
// }

  
// updateHangmanWord(guess) {

//     // Iterate over hangman word
//     for (let i = 0; i < this.word.length; i++) {

//       // Replace underscore with letter if guess is a match
//       if (this.word.charAt(i) === guess) {
//         this._hangmanWord[i] = guess;
//       }
//     }
//   },
// // function increaseWins() {
// //   // to increase win count after user wins
// // }

// function increaseLosses() {
//   // to increase loss count after user loses
// }

// function addToWrongLetterArray(guess) {
//   // to add incorrect letter guess to yourGuess[]
// }



// function isGuessValid(guess) {
//   // make sure user guess wasn't already guessed (1- your guess array 2- hangman word)
// }


// if (alphabet.indexOf(guess) !== -1) {

// }

// function hangmanGame(guess) {


//   // test if guess was correct
//       // if correct, show letter
//       // if incorrect, decrement 'guessLeft', your guesses array


//   // test if user won the game
//       // increase win #
//       // call function to reset game called resetRound()


//   // test if user lost the game
//       // increase loss #
//       // call function to reset game called resetRound()


//   // reset round

// }






// document.onkeyup = function(event) {

//   var userGuess = event.key;

//   hangmanGame(userGuess);

// }

// //
     

       

//         // Set the inner HTML contents of the #game div to our html string
//         userText.innerHTML = html;
//       }
//     };
//   </script>
