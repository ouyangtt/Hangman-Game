
window.onload = function() {


 
// Create an array of elements
var elements = ["hydrogen", "helium", "lithium", "beryllium", "boron", "carbon", "nitrogen","oxygen","fluorine","neon","sodium","magnesium","aluminum","silicon","phosphorus","sulfur","chlorine","argon","potassium","calcium"];
// Pick a random element from the list
var random = elements[Math.floor((Math.random() * elements.length))];
// Initiating variables
var count = 7;
var addGuess = 0;

var letterGuess = [];
// Split the word into charaters
var char = random.split("");

// Display underlines of the randomly pick element
var underlines = [];

 for (var i = 0; i < char.length; i++) {
     underlines[i] = [ "_ "] ;  
 }
 var gameDiv = document.getElementById("game");
 var displayDiv = document.getElementById("display");
 var guessedDiv = document.getElementById("guessed");
 var remainDiv = document.getElementById("remain");



      displayDiv.innerHTML = underlines.join(" ");

      
 // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {
      // Determines which key was pressed.
      var userGuess = event.key;
 
 // This for loop matches the user input with according char and return an array with 1 and 0
 // replace the underlines with matching chars, resulting from the index array
       var index = [];
      
        for (var k = 0; k < char.length; k++){
            if (userGuess == char[k]){
                 index[k] = 1;
                 underlines[k] = userGuess;
            }
            else {
                index[k] = 0;    
            }
        }


if ( JSON.stringify(underlines)== JSON.stringify(char)){
          alert("You Win! Please refresh page for a new game.");
         }


var sum = index.reduce(function(a, b) { return a + b; }, 0);

if (sum == 0){
            letterGuess[addGuess] = userGuess;
            addGuess ++;
           
            function onlyUnique(value, ind, self) { 
             return self.indexOf(value) === ind;
            }
var uniqueGuess = letterGuess.filter( onlyUnique );
       guessedDiv.innerHTML = uniqueGuess;
    count  = 7 - uniqueGuess.length;

    // Updating hangman pictures
     if (count === 6) {
        document.getElementById('images').innerHTML = "<img src=assets/images/1.png>";

    } else if (count === 5) {
        document.getElementById('images').innerHTML = "<img src=assets/images/2.png>";

    } else if (count === 4) {
        document.getElementById('images').innerHTML = "<img src=assets/images/3.png>";

    } else if (count === 3) {
        document.getElementById('images').innerHTML = "<img src=assets/images/4.png>";
        
    } else if (count === 2) {
        document.getElementById('images').innerHTML = "<img src=assets/images/5.png>";
        
    } else if (count === 1) {
        document.getElementById('images').innerHTML = "<img src=assets/images/6.png>";

    } else if (count === 0) {
        document.getElementById('images').innerHTML = "<img src=assets/images/7.png>";  
                    alert("You Lose! Retake CHEM 1A. Please refresh page for a new game.");
                    underlines = char;
    }


}



 // For checking purpose
    console.log(index);
    console.log(char);
    console.log(underlines);
    console.log(userGuess);
    console.log(letterGuess);
    console.log(uniqueGuess);

// Update a new display
displayDiv.innerHTML = underlines.join(" ");
// guessedDiv.innerHTML = uniqueGuess;
remainDiv.innerHTML = count;




}

}







