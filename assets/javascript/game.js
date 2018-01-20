window.onload = function() {

var elements = ["hydrogen", "helium", "lithium", "beryllium", "boron", "carbon", "nitrogen","oxygen","fluorine","neon","sodium","magnesium","aluminum","silicon","phosphorus","sulfur","chlorine","argon","potassium","calcium"];
//generates random #, and assigns it to an item in the array, storing it in random
var random = elements[Math.floor((Math.random() * elements.length))];
// Initiating variables
var win =0;
var lose =0;
var letterGuess = [];
var indexes = [];
var isMatch = false;


//call underscore function to display random underline
underscore();


    document.onkeyup = function(event) {
      var userGuess = event.key;

    }

    for (var j = 0; j < random.length; j++) {
        
        if (random[j] === letterGuess[letterGuess.length-1]) {
            isMatch = true;
            var splitWord = underline.split("");
            for (k = 0; k < indexes.length; k++) {
                splitWord[indexes[k]] = letterGuess[letterGuess.length-1];
                indexes = [];
                                underline = splitWord.join("");
            }
        } 
    }

    if (isMatch) {
        document.getElementById('random').innerHTML = underline;
        letterGuess.pop();

    } else {
  
        guessesRemaining--
        document.getElementById('guessed').innerHTML = letterGuess;
        //display remaining chances
        document.getElementById('remainingGuesses').innerHTML = "Guesses Remaining: " + guessesRemaining;
    }

    isMatch = false;
    checkWin();
    images();
    
});



function underscore() {
    for (var i = 0; i < random.length; i++) {
        underline += "_";
    }
    document.getElementById('random').innerHTML = underline;
}

function checkWin() {
    if (underline === random) {
            alert("You Win!");
        } else if (guessesRemaining === 0) {
            alert("You Lose! Retake CHEM 1A.");
            document.getElementById('random').innerHTML = random;
        }
}   

function images(){
    if (guessesRemaining === 6) {
        document.getElementById('hangman').innerHTML = "<img src=assets/images/1.png height='400'/>";

    } else if (guessesRemaining === 5) {
        document.getElementById('hangman').innerHTML = "<img src=assets/images/2.png height='400'/>";

    } else if (guessesRemaining === 4) {
        document.getElementById('hangman').innerHTML = "<img src=assets/images/3.png height='400'/>";

    } else if (guessesRemaining === 3) {
        document.getElementById('hangman').innerHTML = "<img src=assets/images/4.png height='400'/>";
        
    } else if (guessesRemaining === 2) {
        document.getElementById('hangman').innerHTML = "<img src=assets/images/5.png height='400'/>";
        
    } else if (guessesRemaining === 1) {
        document.getElementById('hangman').innerHTML = "<img src=assets/images/6.png height='400'/>";

    } else if (guessesRemaining === 0) {
        document.getElementById('hangman').innerHTML = "<img src=assets/images/7.png height='400'/>";   
    }
}


}

