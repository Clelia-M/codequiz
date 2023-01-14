// Set arrays for the questions and answers with correct answer for each of them
var questions = [
    { // question 1
        question: "Which is the correct way to add an element to the end of an array in Javascript?",
        answers: [
            "1. myArray.push(element);",
            "2. myArray[myArray.lenght] = element;",
            "3. myArray[-1] = element;",
            "4. myArray.add(element);"
        ],
        correctAnswer: "1. myArray.push(element);"
    },

    { // question 2
        question: "How do you create a function in Javascript?",
        answers: [
            "1. myFunction => {}",
            "2. function = myFunction() {}",
            "3. function myFunction(){}",
            "4. let myFunction = () => {}"
        ],
        correctAnswer: "3. function myFunction(){}"
    },

    { // question 3
        question:"What is the correct syntax for declaring a variable in Javascript?",
        answers: [
            "1. let var x = 5;",
            "2. variable x = 5;",
            "3. x := 5",
            "4. var x = 5;"
        ],
        correctAnswer: "4. var x = 5;"
    },

    { // question 4
        question:"How do you check if a variable is defined in Javascript?",
        answers: [
            "1. if (variable)",
            "2. if (variable != null)",
            "3. if (typeof variable !== 'undefined')",
            "4. if (variable === defined"
        ],
        correctAnswer: "3. if (typeof variable !== 'undefined')"
    },

    { // question 5
        question:"Which of the following is a way to iterate over an array in Javascript?",
        answers: [
            "1. for each (var i in myArray)",
            "2. for (var i = 0; i < myArray.lenght; i++)",
            "3. for (i in myArray)",
            "4. for i in myarray"
        ],
        correctAnswer: "2. for (var i = 0; i < myArray.lenght; i++)"
    },

    { // question 6
        question:"What is the correct way to create an object in Javascript?",
        answers: [
            "1. new Object();",
            "2. var obj = {}",
            "3. var obj = Object.create();",
            "4. object obj;"
        ],
        correctAnswer: "2. var obj = {}"
    },
];