var wins = 0;
var losses = 0;
var guesses = 5;
var usedArray = [];
var pickLetter = pickLetter;
var letters = "abcdefghijklmnopqrstuvwxyz"

//Computer picks random letter here:

pickLetter = letters[Math.floor(Math.random() * letters.length)];
console.log(pickLetter);

function jsGuess() {
    pickLetter = letters[Math.floor(Math.random() * letters.length)];
    console.log(pickLetter);

}

      //logs player input
      document.onkeyup = function (event) {
      var lettersPicked = event.key;

      if (lettersPicked === pickLetter) {
            wins++;
            guesses = 5;
            usedArray = [];

      }

      jsGuess();
      if (lettersPicked !== pickLetter) {
            guesses--;

      }

      if (guesses == 0) {
            losses++;
            usedArray = []
            guesses = 5;
      }

      if (usedArray.indexOf(lettersPicked) >= 0) {

      } else {
            usedArray.push(lettersPicked);
            document.getElementById('lettersPicked').innerHTML = usedArray;
            console.log(usedArray);

      }
      
      document.getElementById('wins').innerHTML = wins;
      document.getElementById('losses').innerHTML = losses;
      document.getElementById('guesses').innerHTML = guesses;

}
