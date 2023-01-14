var highscores;

// Check if the highscores already exist in local storage
var highscoresFromLocalStorage = localStorage.getItem("highscores");

//Conditional statement to check if the variable is true anfd if so parse to JSON, otherways empty array
if (highscoresFromLocalStorage) {
    highscores = JSON.parse(highscoresFromLocalStorage);
} else {
    highscores = [];
}


// Display the highscores
// Clear the highscores when the clear button is clicked
// Save a new highscore
// Display the highscores
// Clear highscore function