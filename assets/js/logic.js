//Set the timer intial value, the current question and the score
var timer = 60;
var currentQuestion = 0;
var score = 0;

// When the start button is clicked, the game starts (Nb. button id #start)
document.getElementById("start").addEventListener("click", startGame);

//Declaring a var for the timer interval
var intervalId;

function startGame() {
    // Hide the start screen and show the question (Nb. div ids #start-screen & #question)
document.getElementById("start-screen").classList.add("hide");
document.getElementById("questions").classList.remove("hide");

// Start the timer
intervalId = setInterval(updateTimer, 1000);
updateTimer();

// Display the first question
displayQuestion();
}

function updateTimer() {
    timer--;
    document.getElementById("time").textContent = timer;

    //Check if it has reached 0
    if (timer === 0) {
        endGame()
    }    
}


//Function displayQuestion
//Function endGame