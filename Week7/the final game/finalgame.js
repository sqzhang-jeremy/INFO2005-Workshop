var guessLives = 0;


function difficultylEasy() {
    document.getElementById("chooseDifficulty").style.display = "none";
    document.getElementById("startButton").style.display = "block";
    guessLives = wordToGuess.length + 5;
    document.getElementById("livesLabel").innerHTML = guessLives;
}

function difficultyMedium() {
    document.getElementById("chooseDifficulty").style.display = "none";
    document.getElementById("startButton").style.display = "block";
    guessLives = wordToGuess.length;
    document.getElementById("livesLabel").innerHTML = guessLives;
}

function difficultyHard() {
    document.getElementById("chooseDifficulty").style.display = "none";
    document.getElementById("startButton").style.display = "block";
    guessLives = Math.floor(wordToGuess.length / 2);
    document.getElementById("livesLabel").innerHTML = guessLives;
}

function startGame(){
    document.getElementById("startButton").style.display = "none";
    document.getElementById("mainGame").style.display = "block";
    document.getElementById("RRguess").style.display = "block";
    document.getElementById("guess").value = "";
    var guessChar = document.getElementById("guess").value;
    enterGuess(guessChar);
}

var wordToGuess = "";

function getRandomWord() {
    var randomWords = ["humor", "miniature", "amusing", "creepy", "fact", "risk", "verse", "land", "lumpy", "holiday", "glorious", "weigh", "brake", "pretty", "grin", "capricious", "bite-sized", "misty", "ignore", "certain", "sloppy", "dress", "true", "zonked", "observation", "action", "various", "want", "direful", "suck", "dress", "scarecrow", "judge", "madly", "quizzical", "consist", "fierce", "love", "arrest", "serve", "fit", "hug", "tan", "curve", "eatable", "tub", "race", "innocent", "open", "preach", "steady", "acoustics", "lock", "field", "arrange", "rifle", "learned", "toe", "flow", "competition", "ill-fated", "oatmeal", "match", "male", "measure", "loaf", "smile", "wrestle", "dull", "food", "locket", "bell", "beg", "strengthen", "responsible", "enchanting", "loutish", "switch", "idea", "nine", "squeamish", "pig", "bat", "dear", "trains", "owe", "frogs", "assorted", "lonely", "hurry", "natural", "sun", "snow", "obnoxious", "broken", "friend", "bright", "cake", "sour", "permit", "economic", "lovely", "quick", "van", "tempt", "apparel", "decay", "business", "adjustment", "blushing", "makeshift", "slippery", "load", "winter", "exist", "tongue", "country", "roll", "fast", "moor", "possess", "pat", "pass", "books", "impartial", "hospitable", "dust", "naughty", "extra-large", "tacky", "produce", "committee", "fuzzy", "judicious", "nebulous", "stick", "ear", "copy", "friendly", "press", "distinct", "vegetable", "upset", "venomous", "statement", "sulky", "spell", "x-ray", "square", "taste", "great", "thumb", "adjoining", "chilly", "test", "ancient", "green", "badge", "work", "repeat", "free", "elderly", "doctor", "difficult", "grubby", "approval", "turn", "vivacious", "thundering", "cherries", "rest", "plan", "crime", "sticks", "wealthy", "phone", "suspend", "gullible", "fence", "note", "wall", "interest", "coil", "jump", "enchanted", "funny", "racial", "greasy", "polish", "elbow", "smart", "bore", "crowd", "glistening", "oval", "eggs", "nauseating", "detailed", "veil", "coal"]

    var arrayLength = randomWords.length;
    wordToGuess = randomWords[Math.floor(Math.random() * arrayLength)];
}

var correctGuess = [];
var wrongGuess = [];

function enterGuess() {
    getRandomWord();
    if (wordToGuess.includes(guessChar)){
        correctGuess.push(guessChar);
    }
    else{
        wrongGuess.push(guessChar);
    }
    document.getElementById("rightGuess").innerHTML = correctGuess.join(", ");
    document.getElementById("wrongGuess").innerHTML = wrongGuess.join(", ");
    document.getElementById("guessesLeft").innerHTML = guessLives - correctGuess.length - wrongGuess.length;
    guessLives--;
    document.getElementById("guessesLeft").innerHTML = guessLives;
}

function restart() {
    
}