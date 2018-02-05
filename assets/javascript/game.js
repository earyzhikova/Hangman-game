  var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var wordBank = ["Everest", "Denali", "Kilimanjaro", "Aconcagua", "Elcapitan", "Whiteface", "Montblanc", "Grandfather", "Mitchell"];
  var wins = 0;
  var losses = 0;
  var guessRemain = 6;
  var wrongGuess = [];
  var randomWord = "";


  /**
   * Runs when the page is loaded
   */
  document.addEventListener("DOMContentLoaded", function () {
      setUp()
  }, false);


  /**
   * Does game setup/reset
   */
  function setUp() {
      wrongGuess = [];
      document.getElementById('js-wrong-guess').innerHTML = wrongGuess;
      guessRemain = 6;
      document.getElementById('js-guess-remain').innerHTML = guessRemain;
      randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
      var underscoreText = "";
      for (var i = 0; i < randomWord.length; i++) {
          underscoreText += " _";
          document.getElementById('guessPanel').innerHTML = underscoreText;
          console.log(randomWord);
      }
  }

function replaceAt(string, index, replace) {
  return string.substring(0, index) + replace + string.substring(index + 1);
}

  /**
   * Runs when a key is pressed
   * @param {*A key is pressed} event 
   */
  document.onkeypress = function (event) {
      var userGuess = event.key;
      console.log(userGuess);
      if(isInAlphabet(userGuess)) {
        var correctLetterNumbers = isGuessCorrect(userGuess);
        var underscoreText = '';
        if (correctLetterNumbers.length != 0) {
          //replacing underscores
            for (var i = 0; correctLetterNumbers.length > i; i++) {
                underscoreText = document.getElementById('guessPanel').innerHTML;
                underscoreText = replaceAt(underscoreText, correctLetterNumbers[i]*2, userGuess);
                document.getElementById("guessPanel").innerHTML = underscoreText;
            }
            //checking if they won the game (no underscores)
          if (underscoreText.indexOf(' _') == -1){
            var winText = document.getElementById('js-wins').innerHTML;
            winText = parseInt(winText)+1;
            document.getElementById('js-wins').innerHTML = winText;
            alert('Won Game!');
            setUp();
          }
        }
        else {
            wrongGuess.push(userGuess);
            document.getElementById('js-wrong-guess').innerHTML = wrongGuess.join(' ');
            var guessRemain = document.getElementById("js-guess-remain").innerHTML;
            guessRemain = parseInt(guessRemain)-1;
            document.getElementById("js-guess-remain").innerHTML = guessRemain;
            if(guessRemain < 1){
              var lossText = document.getElementById('js-losses').innerHTML;
              lossText = parseInt(lossText)+1;
              document.getElementById('js-losses').innerHTML = lossText;
              alert("Lost Game!");
              setUp();
            }
            // wrongGuess.push(i);
            // wrongGuess.getElementById.innerHTML = wrongGuess.join(', ');
        }
      }
  }


  /**
   * Checks if the user guess is in the alphabet
   * @param {*The guess letter} userGuess 
   */
  function isInAlphabet(userGuess) {
    var isIndeedInAlphabet = false;
      for (var i = 0; i < alphabet.length; i++) {
          if ((userGuess == alphabet[i].toLowerCase()) || (userGuess == alphabet[i].toUpperCase())) {
             isIndeedInAlphabet = true;
          }
      }
    return isIndeedInAlphabet;
  }


  function whenUserLose() {
      if (guessRemain === 0) {
          return true;
      } else {
          return false;
      }
  }

  function whenUserWin() {
      if (guessRemain === 0) {
          return true;
      } else {
          return false;
      }
  }

  function isGuessCorrect(userGuess) {
    var correctLetterNumbers = [];
    //for random word length check each letter
     for (var i = 0; i < randomWord.length; i++) {
        if(( userGuess == randomWord.charAt(i).toLowerCase()) || (userGuess == randomWord.charAt(i).toUpperCase())){
          correctLetterNumbers.push(i);
        }
     }
     console.log(correctLetterNumbers);

    return(correctLetterNumbers);

    //   if (randomWord.indexOf(userGuess) !== -1) {
    //       return true;
    //       // call replaceUnderscore(userGuess)
    //   } else {
    //       return false;
    //   }
  }

  // function replaceUnderscore(userGuess) {
  //     for (var i = 0; i < randomWord.length; i++) {
  //         if (userGuess === randomWord[i]) {
  //             underscoreText[i] = userGuess;
  //         }
  //     }
  // }


  //   console.log(randomWord);
  //   document.getElementById("guessPanel").innerHTML = underscoreText; 

  // to replace underscore with correctly guessed letter

  // function replaceUnderscore(userGuess) {
  //   for(var i = 0; i < randomWord.length; i++){
  //    if (this.randomWord.charAt(i) === guess) {
  //         this.randomWord[i] = guess;

  //       } 
  //     }
  // }




  //   function incrementwins() {
  //    wins++;
  //   }

  //   function incrementlosses() {
  //    losses++;
  //   }

  //   function decrementguessRemain() {
  //     guessRemain--;
  //   }

  //   function newRound() {
  //       guessRemain = 6;
  //       wrongGuess = [];
  //       chooserandomWord();
  //       createunderscoreText();
  //       updateBrowserWindow();
  //   }

  //   function updateBrowserWindow() {
  //       document.getElementById('js-wins').innerHTML = wins;
  //       document.getElementById('js-losses').innerHTML = losses;
  //       document.getElementById('js-guess-remain').innerHTML = guessRemain;
  //       document.getElementById('js-guessPanel').innerHTML = underscoreText;
  //       document.getElementById('js-wrong-guess').innerHTML = wrongGuess;



  //   function gameEngine(userGuess) {

  //       // is user guess a letter
  //       if (isInAlphabet(userGuess)) {

  //           // if so, is user guess previously guessed
  //           if (isGuessValid(userGuess)) {

  //               // is user guess correct
  //               if (isGuessCorrect(userGuess)) {

  //                   // replace underscore with user guess at proper indices
  //                   replaceUnderscore(userGuess);
  //                   updateBrowserWindow();
  //               } else { // if user guess was wrong

  //                   // add letter to letters guessed array
  //                   addTowrongGuess(userGuess);
  //                   decrementguessRemain();
  //                   updateBrowserWindow();
  //               }
  //           } else { /* do nothing */ }
  //       } else { /* do nothing */ }

  //       // Test if user won
  //       if (whenUserWin()) {
  //           incrementwins();
  //           console.log("The Player Won This Round");
  //           newRound();
  //       }

  //       // Test if user lost
  //       if (whenUserLose()) {
  //           incrementlosses();
  //           console.log("The Player Lost This Round");
  //           newRound();
  //       }t



  // newRound();

  // document.addEventListener('keyup', function(event) {
  //     userGuess = event.key.toUpperCase();
  //     gameEngine(userGuess);

  //    }); 
  //     // 



    //     var correctLetterNumbers = []   
        // for (var i = 0; i < randomWord.length; i++)
    //     {
    //       // console.log(randomWord.charAt(i));
    //       if ((userGuess  == randomWord[i].toLowerCase()) ||  (userGuess  == randomWord[i].toUpperCase())) {

    //       correctLetterNumbers.push(i);
    //       alert(randomWord);
    //     }
    //    }

    //       return correctLetterNumbers;
    // }



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

    // function isGuessValid(guess) {
    //   // make sure user guess wasn't already guessed (1- your guess array 2- hangman word)
    // }