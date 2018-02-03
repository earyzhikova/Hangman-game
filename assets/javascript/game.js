    // an array with all the options
    

    // user presses a key.
    document.onkeyup = function(event) {

      // which key was pressed.
      var userGuess = event.key;

//

var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var wordBank = ["word1", "word2", "word3"];
var wins = 0;
var losses = 0;
var guessLeft = 10;
var yourGuess = [];


function isGuessCorrect(guess) {
  if () {
    return true;
  } else {
    return false;
  }
}

function replaceUnderscore(guess) {
  // to replace underscore with correctly guessed letter
}

function increaseWins() {
  // to increase win count after user wins
}

function increaseLosses() {
  // to increase loss count after user loses
}

function addToWrongLetterArray(guess) {
  // to add incorrect letter guess to yourGuess[]
}

function isInAlphabet(guess) {
  // to check if user guess is valid guess (in alphabet)
}

function isGuessValid(guess) {
  // make sure user guess wasn't already guessed (1- your guess array 2- hangman word)
}


if (alphabet.indexOf(guess) !== -1) {

}

function hangmanGame(guess) {

  // make sure user guess was in alphabet
isLetters(arr) { for (var i = 0; i < arr.length; i++) { if(arr[i].toLowerCase() != arr[i].toUpperCase()){ } else { return false; } } return true; }

  // test if guess was correct
      // if correct, show letter
      // if incorrect, decrement 'guessLeft', your guesses array


  // test if user won the game
      // increase win #
      // call function to reset game called resetRound()


  // test if user lost the game
      // increase loss #
      // call function to reset game called resetRound()


  // reset round

}






document.onkeyup = function(event) {

  var userGuess = event.key;

  hangmanGame(userGuess);

}

//
      // Randomly chooses a choice from the options array. This is the Computer's guess.
      var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

      
      // This logic determines the outcome of the game (win/loss/left guesses/ desplayed guesses), and increments the appropriate number
      if ((userGuess === "#") || (computerGuess === "#") {

        if ((userGuess === "0") && (computerGuess === "0")) {
          wins++;
        } else if ((userGuess === "r") && (computerGuess === "p")) {
          losses++;
        } else if ((userGuess === "s") && (computerGuess === "r")) {
          losses++;
        } else if ((userGuess === "s") && (computerGuess === "p")) {
          wins++;
        } else if ((userGuess === "p") && (computerGuess === "r")) {
          wins++;
        } else if ((userGuess === "p") && (computerGuess === "s")) {
          losses++;
        } else if (userGuess === computerGuess) {
          ties++;
        }

        // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
        var html =
          "<p>You chose: " + userGuess + "</p>" +
          "<p>The computer chose: " + computerGuess + "</p>" +
          "<p>wins: " + wins + "</p>" +
          "<p>losses: " + losses + "</p>" +
          "<p>ties: " + ties + "</p>";

        // NOTE: innerHTML works like textContent except that it also lets us use HTML tags in the string (textContent
        // doesn't allow HTML tags).

        // Set the inner HTML contents of the #game div to our html string
        userText.innerHTML = html;
      }
    };
  </script>
