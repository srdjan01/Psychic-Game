// Guess what letter I'm thinking of 
// 1.Assign a random letter to a variable
// 2.Capture a user input
// 3.Compere it with random letter
// 4.Checking if is match or if is not
// 5.If is match tell user ("You Won") and display +1 to wins and geusses are reseted to 9 
// 6.If is not a match display (1.guesses left: -1)(Your guesses so far: add guessed letter..etc h)
// 7.If guesses left are = 0 then losses +1; guesses resets to 9.

// Wins: (# of times the user has guessed the letter correctly)
// Losses: (# of times the user has failed to guess the letter correctly after exhausting all guesses)
// Guesses Left: (# of guesses left. This will update)
// Your Guesses So Far: (the specific letters that the user typed. Display these until the user either wins or loses.)
// When the player wins, increase the Wins counter and start the game over again (without refreshing the page).
// When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins

// TODO: Prevent duplicate letters
// TODO: Prevent user from putting in non-letters
// TODO: Remove duplication of code

// Array of letters a to z (26 letters)
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Creates Random Number 0 - 25
var randomNumber = (Math.floor(Math.random() * 26));

// Assigns random letter to variable
randomLetter = letters[randomNumber];

// Declare variables
var wins = 0;
var losses = 0;
var guesses = 9;
var letterguessed = [];

document.onkeyup = function() {
	var userInput = String.fromCharCode(event.keyCode).toLowerCase();
	
	// Check how many guesses user has left
	// Check if guesses is greater than/equal to 1
	if (guesses >= 1) {
	// If guesses does not equal 0
		if (userInput === randomLetter){
			// If user input match letter score goes up by 1
			wins = wins + 1;
			// Resests guesses bck to 9
			guesses = 9;
			// Resets the array of letters the user guessed
			letterguessed = [];
			// Creates Random Number 0 - 25
			var randomNumber = (Math.floor(Math.random() * 26));
			// Assigns random letter to variable
			randomLetter = letters[randomNumber];
		} 
		else {
			// If user input does not match score guesses left goes down by 1
			guesses = guesses - 1;
			// Adds letters to array 
			letterguessed.push(userInput);
			if (guesses === 0){
				losses = losses + 1;
				guesses = 9;
				letterguessed = [];
				// Creates Random Number 0 - 25
				var randomNumber = (Math.floor(Math.random() * 26));
				// Assigns random letter to variable
				randomLetter = letters[randomNumber];
			}
		}
	}
	else{
		losses = losses + 1;
		guesses = 9;
		letterguessed = [];
		// Creates Random Number 0 - 25
		var randomNumber = (Math.floor(Math.random() * 26));
		// Assigns random letter to variable
		randomLetter = letters[randomNumber];
	}

	// Value to be displayed on html page
	// Display wins
	document.getElementById("wins").innerHTML = wins;
	// Displays losses
	document.getElementById("losses").innerHTML = losses;
	// Displays guessesLeft
	document.getElementById("guessesLeft").innerHTML = guesses;

	//Dysplay every letter in the array
	var text = "";
	var i;
	for (i = 0; i < letterguessed.length; i++) {
    text += letterguessed[i] + ", ";
	}
	document.getElementById("userGuesses").innerHTML = text;

}




