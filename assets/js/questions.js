// Set arrays for the questions and answers with correct answer for each fo them
var questions = [
    { // question 1
        question: "Which is the correct way to add an element to the end of an array in Javascript?",
        answers: [
            "myArray.push(element);",
            "myArray[myArray.lenght] = element;",
            "myArray[-1] = element;",
            "myArray.add(element);"
        ],
        correctAnswer: "myArray.push(element);"
    },

    { // question 2
        question: "How do you create a function in Javascript?",
        answers: [
            "function myFunction(){}",
            "function = myFunction() {}",
            "myFunction => {}",
            "let myFunction = () => {}"
        ],
        correctAnswer: "function myFunction(){}"
    },

    { // question 3
        question:"What is the correct syntax for declaring a variable in Javascript?",
        answers: [
            "let var x = 5;",
            "variable x = 5;",
            "x := 5",
            "var x = 5;"
        ],
        correctAnswer: "var x = 5;"
    },

    { // question 4
        question:"How do you check if a variable is defined in Javascript?",
        answers: [
            "if (variable)",
            "if (variable != null)",
            "if (typeof variable !== 'undefined')",
            "if (variable === defined"
        ],
        correctAnswer: "typeof variable !== 'undefined'"
    },

    { // question 5
        question:"Which of the following is a way to iterate over an array in Javascript?",
        answers: [
            "for each (var i in myArray)",
            "for (var i = 0; i < myArray.lenght; i++)",
            "for (i in myArray)",
            "for i in myarray"
        ],
        correctAnswer: "for (var i = 0; i < myArray.lenght; i++)"
    },
];