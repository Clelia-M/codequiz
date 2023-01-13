//Set the timer intial value, the current question and the score
var timer = 60;
var currentQuestion = 0;
var score = 0;

// When the start button is clicked, the game starts (Nb. button id #start)
document.getElementById("start").addEventListener("click", startGame);

function startGame() {
    // Hide the start screen and show the question (Nb. div ids #start-screen & #question)
document.getElementById("start-screen").classList.add("hide");
document.getElementById("questions").classList.remove("hide");

// Start the timer

// Check if the timer has reached the zero 

// Display the first question
}
// Display the answers