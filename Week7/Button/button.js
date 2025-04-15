function showElement() {
  document.getElementById("bottonToHide").style.display = "block";
}

function hideElement() {
  document.getElementById("bottonToHide").style.display = "none";
}

var wordToGuess = "";

function GetRandomWord() {
  var randomWords = ["humor", "miniature", "amusing", "creepy", "fact", "risk", "verse", "land", "lumpy", "perfect"]

  /* Write code here to generate a random number and asign to wordToGuess the corresponding word */
  var arrayLength = randomWords.length;
  wordToGuess = randomWords[Math.floor(Math.random() * arrayLength)];
  document.getElementById("randomWordLable").innerHTML = wordToGuess;
}

var guessLives = 0;

function startEasy() {
  
  /* Assign the number of guesses to guessLives */
  guessLives = (wordToGuess.length) * 2;
  
  document.getElementById("livesLabel").innerHTML = guessLives;
}

function startNormal() {
  
  /* Assign the number of guesses to guessLives */
  guessLives = wordToGuess.length;
  
  document.getElementById("livesLabel").innerHTML = guessLives;
}

function startHard() {
  
  /* Assign the number of guesses to guessLives */
  guessLives = Math.floor(wordToGuess.length / 2);
  document.getElementById("livesLabel").innerHTML = guessLives;
}

function submitGuess() {
    /* code to get guess Input value*/
    var guessChar = document.getElementById("guessInput").value;
    document.getElementById("guessInput").value = "";
    document.getElementById("inputCharLable").innerHTML = guessChar;
    checkGuess(guessChar);}

var correctGuess = [];
var wrongGuess = [];

function checkGuess(guessChar) {
  if (wordToGuess.includes(guessChar)){
      correctGuess.push(guessChar);
  }
  else{
    wrongGuess.push(guessChar);
  }
  document.getElementById("correctGuessLabel").innerHTML = correctGuess;
  document.getElementById("wrongGuessLabel").innerHTML = wrongGuess;

  /* code to decrease the number of lives */
  // guessLives--;
  // document.getElementById("livesLabel").innerHTML = guessLives;
}

function restart() {
  // variables
  wordToGuess = "";
  guessLives = 0;
  correctGuess = [];
  wrongGuess = [];
  document.getElementById("randomWordLable").innerHTML = "";
  document.getElementById("inputCharLable").innerHTML = "";
  document.getElementById("correctGuessLabel").innerHTML = "";
  document.getElementById("wrongGuessLabel").innerHTML = "";
  document.getElementById("livesLabel").innerHTML = "";
  
}