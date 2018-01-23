
window.onload = function() {

    // document.onkeyup = function(event) {
    //   var userGuess = event.key;

 
// Create an array of elements
var elements = ["hydrogen", "helium", "lithium", "beryllium", "boron", "carbon", "nitrogen","oxygen","fluorine","neon","sodium","magnesium","aluminum","silicon","phosphorus","sulfur","chlorine","argon","potassium","calcium"];
// Pick a random element from the list
var random = elements[Math.floor((Math.random() * elements.length))];
// Initiating variables
var win =0;
var lose =0;
var count = 7;

var isMatch = false;


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
       var index = [];
        for (var k = 0; k < char.length; k++){
            if (userGuess == char[k]){
                 index[k] = 1;
            }
            else {
                index[k] = 0;
            }
        }
  // This for loop replace the underlines with matching chars, resulting from the above index array
        for (var l = 0; l < char.length; l++) {
            if (index[l] == 1) {
            underlines[l] = userGuess;
            }
        }






var sum = index.reduce(function(a, b) { return a + b; }, 0);
var letterGuess = [];
if (sum == 0){
    letterGuess = letterGuess.push(userGuess);
}
   var newguessDiv = document.createElement("div");
      newguessDiv.innerHTML = letterGuess;

         guessedDiv.appendChild(newguessDiv);


 // For checking purpose
    console.log(index);
    console.log(char);
    console.log(random);
    console.log(userGuess);
    console.log(underlines);
    console.log(letterGuess);


// Update a new display

displayDiv.innerHTML = underlines.join(" ");
guessedDiv.innerHTML = letterGuess;
guessedDiv.innerHTML = count;


gameDiv.appendChild(displayDiv);
// gameDiv.appendChild(guessedDiv);






}


}

    //   displayDiv.appendChild(newDiv);



