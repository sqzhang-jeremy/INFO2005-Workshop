function showElement() {

}

function hideElement() {

}

var wordToGuess = "";

function GetRandomWord() {
  var randomWords = ["humor", "miniature", "amusing", "creepy", "fact", "risk", "verse", "land", "lumpy", "perfect"]

  /* Write code here to generate a random number and asign to wordToGuess the corresponding word */
  
  document.getElementById("randomWordLable").innerHTML = wordToGuess;
  
}

var guessLives = 0;

function startEasy() {
  
  /* Assign the number of guesses to guessLives */
  
  document.getElementById("livesLabel").innerHTML = guessLives;
}

function startNormal() {
  
  /* Assign the number of guesses to guessLives */
  
  document.getElementById("livesLabel").innerHTML = guessLives;
}

function startHard() {
  
  /* Assign the number of guesses to guessLives */
  
  document.getElementById("livesLabel").innerHTML = guessLives;
}

function submitGuess() {
    var guessChar = /* code to get guess Input value*/
    checkGuess(guessChar);
}

var correctGuess = [];
var wrongGuess = [];

function checkGuess(guessChar) {

}

function restart() {

}