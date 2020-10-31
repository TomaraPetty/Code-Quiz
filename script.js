// Start button - add event listener 
// Score keeper - activity 11 increment/decrement & activity 18 shopping cart 
// Prompts for questions to pop up
// Timer starts and activates first question activity 8 - timer + 29 timer app 
// End quiz when all questions are answered or timer reaches 0 - should go through TODO 25 & 26
// Save initials and score - potentially activity 22 for local storage signUpButton and recall info.

var score = 0;
var questions = [
  { 
    prompt: "Arrays in JavaScript can be used to store _____.\n(1) Numbers and strings\n(2) Other arrays\n(3) Booleans\n(4) All of the above",
    answer: "4"
  },
  { prompt: "The condition in an if / else statement is enclosed within ____.\n(1) quotes\n(2) curly brackets\n(3) parentheses\n(4) square brackets",
    answer: "4" 
  },
  { prompt: "A very useful tool used during development adn debugging for printing content to the debugger is:\n(1) JavaScript\n(2) terminal / bash\n(3) for loops\n(4) console.log",
    answer: "4"
  },
  { prompt: "Commonly used data types DO NOT include:\n(1) strings\n(2) booleans\n(3)alerts\n(4) numbers",
    answer: "3"
  },
  { prompt: "String values must be enclosed within _____ when being assigned to variables.\n(1) commas\n(2) curly brackets\n(3) quotes\n(4) parentheses",
    answer: "3"
  }
]

for (var i = 0; i < questions.length; i++) {
  var response = window.prompt(questions[i].prompt);
  if (response == questions[i].answer) {
  score++;
  alert("Correct!");
  } else {
    alert("Your answer is incorrect.");
  }
}
alert("You got " + score + " out of " + questions.length + " correct.");

