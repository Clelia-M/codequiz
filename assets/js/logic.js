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

//displayQuesiton function
function displayQuestion() {
    var question = questions[currentQuestion].question;
    var answers = questions[currentQuestion].answers;

    // Display the question (Nb. question title id #question-title)
    document.getElementById("question-title").innerHTML = question;

    //Clear any previous choice (Nb. choice id #choices)
    document.getElementById("choices").innerHTML = "";

    //Display the potential answers
    for (var i = 0; i < answers.length; i++) {
        var answerBtn = answers[i];
        answerBtn.setAttribute("value", answers[i]);
        answerBtn.addEventListener("click", checkAnswer);
        document.getElementById("choices").appendChild(answerBtn);
    }
}

//Function endGame