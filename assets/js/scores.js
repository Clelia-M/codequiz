// document.getElementById("submit").addEventListener("click", function() {

//     // Get the initials and score from the input fields
//     var initials = document.getElementById("initials").value;
//     var score = document.getElementById("final-score").innerHTML;

//     // Create a new highscore object
//     var highscore = {
//         initials: initials,
//         score: score
//     };

//     // Check if the highscores already exist in local storage
//     var highscores = JSON.parse(localStorage.getItem("highscores"));

//     // if they don't exist, set highscores to an empty array
//     if (!highscores) {
//         highscores = [];
//     }

//     // Add the new highscore to the array
//     highscores.push(highscore);

//     // Save the highscores back to local storage
//     localStorage.setItem("highscores", JSON.stringify(highscores));
// });

// Display the highscores
displayHighscores();

// Display the highscores
function displayHighscores() {
    var highscoresList = document.getElementById("highscores");

    // Clear the list
    highscoresList.innerHTML = "";

    // get the exisiting highscores from local storage
    var highscores = JSON.parse(localStorage.getItem("highscores"));

    // if they don't exist, set highscores to an empty array
    if (!highscores) {
        highscores = [];
    }

    // Sort the highscores by score
    highscores.sort(function compareScores(a, b) {
        return b.score - a.score;
    });
    
    // Add the highscores to the list
    for (var i = 0; i < highscores.lenght; i++) {
        var highscore = highscores[i];
        var initials = highscore.initials;
        var score = highscore.score;
        var listItem = document.createElement("li");
        listItem.innerHTML = initials + " - " + score;
        highscoresList.appendChild(listItem);
    }
}

// Clear the highscores when the clear button is clicked
// nb. id for clear button #clear
document.getElementById("clear").addEventListener("click", clearHighscores);

// // Save a new highscore
// function saveHighscore(intials, score) {
//     highscores.push({ initials, score });
//     localStorage.setItem("highscores", JSON.stringify(highscores));
// }

// Clear highscore function
function clearHighscores() {
    highscores = [];
    localStorage.removeItem("highscores");
    displayHighscores();
}