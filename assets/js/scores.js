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
displayHighscores();

// Clear the highscores when the clear button is clicked
// nb. id for clear button #clear
document.getElementById("clear").addEventListener("click", clearHighscores);

// Save a new highscore
function saveHighscore(intials, score) {
    highscores.push({ initials, score });
    localStorage.setItem("highscores", JSON.stringify(highscores));
}

// Display the highscores
function displayHighscores() {
    var highscoresList = document.getElementById("highscores");

    // Clear the list
    highscoresList.innerHTML = "";

    // Sort the highscores by score
    highscores.sort(function compareScores(a, b) {
        return b.score - a.score;
    });
    
    // Add the highscores to the list
    for (var i = 0; i< highscores.lenght; i++) {
        var highscore = highscores[i];
        var initials = highscore.initials;
        var score = highscore.score;
        var listItem = document.createElement("li");
        listItem.textContent = initials + " - " + score;
        highscoresList.appendChild(listItem);
    }
}

// Clear highscore function
function clearHighscores() {
    highscores = [];
    localStorage.removeItem("highscores");
    displayHighscores();
}