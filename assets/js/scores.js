window.addEventListener("load", displayHighscores);

function displayHighscores() {
    //get the highscores from local storage
    var highscores = JSON.parse(localStorage.getItem("highscores")) || [];

    // Sort the highscores by score
    highscores.sort((a,b) => b.score - a.score);

    // Get the highscores list element
    var highscoresList = document.getElementById("highscores");

    // Clear the list
    highscoresList.innerHTML = "";

    // Loop through the highscores
    highscores.forEach(highscore => {
        var listItem = document.createElement("li");
        listItem.innerHTML = `${highscore.initials} - ${highscore.score}`;
        highscoresList.appendChild(listItem);
    });
}

// Clear the highscores when the clear button is clicked
// nb. id for clear button #clear
document.getElementById("clear").addEventListener("click", clearHighscores);

// Clear highscore function
function clearHighscores() {
    highscores = [];
    localStorage.removeItem("highscores");
    displayHighscores();
}