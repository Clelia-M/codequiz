# ❓Javascript Code Quiz Application
This is a timed, multiple-choice coding quiz on Javascript fundamentals that can keep track of high scores and quiz-takers' initials.
This application uses Javascript for the logic and HTML and CSS for the layout and styling. The questions are store in a separate Javascript file, and the high scores are stored in the local storage of the browser. 

The Javascript code uses functions and event listeners to handle user interactions and update the content on the screen. It also uses the local storage to store the high scores. 

It has been created by modifying a given HTML and CSS starter code and it is the challenge for week 6 of the Front-End Development bootcamp. 

## Table of Contents
- [Scope](#scope-of-project)
- [Workflow](#workflow)
- [Final result](#final-results)

# Scope of the project
1. The user clicks the Start button on the home page, which triggers the timer to start and the first question to be displayed. 
2. The user answers the question, and if the answer is correct, the next question is displayed. If the answer is incorrect, 10 seconds are subtracted from the clock. 
3. The user continues answering questions until all 6 questions have been answered or the time reaches 0.
4. Once the game is over, the user is prompted to enter their initials (max 3 characters) and submit their score. 
5. The user can also view their high scores by clicking on the "View Highscores" link on the top left corner of the home page. This will redirect them to a page where they can see a list of the highest scores sorted by score. 
6. The user can also clear the high scores by clicking the "Clear Highscores" button on the high scores page.

# Workflow
- Declaration of global variables: timer, current quesiton and score.
- "startGame" function: called when the user clicks the start button. This function hides the start screen and displays the questions. It also starts the timer by calling the "setInterval" function, which decrements the timer by one second and updates the timer display on the screen (top-right corner). If the timer reaches 0, the 'endGame' function is called. 
- "displayQuestion" function: called to display the current question and the possible answers. The function uses the 'innerHTML' property to update the question title and answer choices on the screen. 
- "checkAnswer" function: called when the user clicks an answer button. It compares the user's answer with the correct answer and update the score accordingly. If the answer is correct, the next question is dislayed. If the answer is incorrect, time (10 seconds) is subtracted from the timer. 
- "endGame" function: called when the user has answered all the questions or the time reaches 0. It displays the final score and prompts the user to enter their initials and submit their score. The score is then stored in the Local storage. 
- "displayHighscores" function is called when the user clicks the "View Highscores" button (top-left corner). It retrieves the scores from the Local storage, sorts them by score, and displays them on the screen. 
- "clearHighscores" function: called when the user clicks the "Clear Highscores" button. It clears the scores from the Local storage. 
- Change of the styling via the CSS file to adjust the design based on screenshoots provided for the challenge.

## Link to deployed Application
[Javascript Code Quiz Application](https://clelia-m.github.io/codequiz/index.html)

## Final Results
![Start page](https://github.com/Clelia-M/codequiz/blob/55ae8566c694d36ba37c01c7ae59635e36a50be8/app%20final/1_Start%20page.png)

![Question page](https://github.com/Clelia-M/codequiz/blob/55ae8566c694d36ba37c01c7ae59635e36a50be8/app%20final/2_Question%20page.png)

![EndGame page](https://github.com/Clelia-M/codequiz/blob/55ae8566c694d36ba37c01c7ae59635e36a50be8/app%20final/3_EndGame%20page.png)

![HighScores page](https://github.com/Clelia-M/codequiz/blob/55ae8566c694d36ba37c01c7ae59635e36a50be8/app%20final/4_HighScores%20page.png)
