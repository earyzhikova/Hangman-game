  var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var wordBank = ["Everest", "Denali", "Kilimanjaro", "Aconcagua", "Elcapitan", "Whiteface", "Montblanc", "Grandfather", "Mitchell"];
  var wins = 0;
  var losses = 0;
  var guessRemain = 6;
  var wrongGuess = [];
  var randomWord = "";



  document.addEventListener("DOMContentLoaded", function() {
   setUp()
  }, false);


  function setUp() {
  wrongGuess = [];
  guessRemain = 6;
  randomWord = wordBank[Math.floor(Math.random()*wordBank.length)];
  var underscoreText = "";
  for(var i = 0; i < randomWord.length; i ++){
    underscoreText += " _";
      console.log(randomWord);

    }
  }

  console.log(randomWord);
  document.getElementById("guessPanel").innerHTML = underscoreText; 



   // user presses a key.
  document.onkeypress = function(event) {
        var userGuess = event.key;
        console.log(userGuess);
        isInAlphabet(userGuess);
       var correctLetterNumbers =  isGuessCorrect(userGuess);
       if (correctLetterNumbers !== []) {
          for (var i = 0; correctLetterNumbers.length > i; i++) {
            document.getElementById(guessPanel).innerHTML = underscoreText; 
            underscoreText =  document.getElementById("guessPanel") = correctLetterNumbers;
            console.log(underscoreText);
         //   underscoreText.charAt(correctLetterNumbers[i]*2) = userGuess;

          }
       }
       else {
        wrongGuess.push(i); 
      wrongGuess.getElementById.innerHTML = wrongGuess.join(', ');

  //   }

       }

      }
  // make sure user guess was in alphabet

  function isInAlphabet(userGuess) {
    for(var i = 0; i < alphabet.length; i++) {
      if ((userGuess  == alphabet[i].toLowerCase()) ||  (userGuess  == alphabet[i].toUpperCase())) {
        return true;
      } else {
        return false;
      }

    }

  }



  function incrementwins() {
   wins++;
  }

  function incrementlosses() {
   losses++;
  }

  function decrementguessRemain() {
    guessRemain--;
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

  function replaceUnderscore(userGuess) {
    for (var i = 0; i < randomWord.length; i++) {
      if (userGuess === randomWord[i]) {
        underscoreText[i] = userGuess;
      }
    }
  }


   // to replace underscore with correctly guessed letter

  // function replaceUnderscore(userGuess) {
  //   for(var i = 0; i < randomWord.length; i++){
  //    if (this.randomWord.charAt(i) === guess) {
  //         this.randomWord[i] = guess;

  //       } 
  //     }
  // }


  function isGuessCorrect(userGuess) { 
    if (randomWord.indexOf(userGuess) !== -1) {
      return true;
      // call replaceUnderscore(userGuess)
    } else {
      return false;
    }
  }



  function newRound() {
      guessRemain = 6;
      wrongGuess = [];
      chooserandomWord();
      createunderscoreText();
      updateBrowserWindow();
  }

  function updateBrowserWindow() {
      document.getElementById('js-wins').innerHTML = wins;
      document.getElementById('js-losses').innerHTML = losses;
      document.getElementById('js-guess-remain').innerHTML = guessRemain;
      document.getElementById('js-guessPanel').innerHTML = underscoreText;
      document.getElementById('js-wrong-guess').innerHTML = wrongGuess;



  function gameEngine(userGuess) {
      
      // is user guess a letter
      if (isInAlphabet(userGuess)) {
          
          // if so, is user guess previously guessed
          if (isGuessValid(userGuess)) {
              
              // is user guess correct
              if (isGuessCorrect(userGuess)) {
                  
                  // replace underscore with user guess at proper indices
                  replaceUnderscore(userGuess);
                  updateBrowserWindow();
              } else { // if user guess was wrong
                  
                  // add letter to letters guessed array
                  addTowrongGuess(userGuess);
                  decrementguessRemain();
                  updateBrowserWindow();
              }
          } else { /* do nothing */ }
      } else { /* do nothing */ }
      
      // Test if user won
      if (whenUserWin()) {
          incrementwins();
          console.log("The Player Won This Round");
          newRound();
      }
      
      // Test if user lost
      if (whenUserLose()) {
          incrementlosses();
          console.log("The Player Lost This Round");
          newRound();
      }
  

  
newRound();

document.addEventListener('keyup', function(event) {
    userGuess = event.key.toUpperCase();
    gameEngine(userGuess);

   }); 
    // 



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


  
  