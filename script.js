// Score keeper - activity 11 increment/decrement & activity 18 shopping cart 
// Save initials and score - potentially activity 22 for local storage signUpButton and recall info.
// reset when quiz is over score gets recorded and then set back to 0 

// Select elements 
const start = $('#start');
const quiz = $('#quiz');
const question = $('#question');
const choiceA = $('#A');
const choiceB = $('#B');
const choiceC = $('#C');
const choiceD = $('#D');
const timeEl = $("#time");


// var secondsLeft = numberOfQuestions * 20;
var score = 0;
var timerInterval;

// set timer 
function setTime() {
  timerInterval = setInterval(function() {
    secondsLeft--;
    $(timeEl).text(secondsLeft);

    if(secondsLeft <= 0) {
      secondsLeft = 0;
      $(timeEl).text(secondsLeft);
      endQuiz();
    }

  }, 1000);
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
  setTime();
  renderQuestion();
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Questions array of objects 
var questions = [
  { 
    question: "Arrays in JavaScript can be used to store _____.",
    choiceA: "Numbers and strings",
    choiceB: "Other arrays",
    choiceC: "Booleans",
    choiceD: "All of the above",
    correct: "D"
  },
  { question: "The condition in an if / else statement is enclosed within ____.",
    choiceA: "Quotes",
    choiceB: "Curly brackets",
    choiceC: "Parentheses",
    choiceD: "Square brackets",
    correct: "D" 
  },
  { question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choiceA: "JavaScript",
    choiceB: "Terminal / bash",
    choiceC: "For loops",
    choiceD: "Console.log",
    correct: "D"
  },
  { question: "Commonly used data types DO NOT include:",
    choiceA: "Strings",
    choiceB: "Booleans",
    choiceC: "Alerts",
    choiceD: "Numbers",
    correct: "C"
  },
  { question: "String values must be enclosed within _____ when being assigned to variables.",
    choiceA: "Commas",
    choiceB: "Curly brackets",
    choiceC: "Quotes",
    choiceD: "Parentheses",
    correct: "C"
  }
]

// number of questions determins number of seconds to take quiz. 
var numberOfQuestions = Object.keys(questions).length;
var secondsLeft = numberOfQuestions * 10;
console.log(Object.keys(questions).length);

//questions.forEach(renderQuestion);
let lastQuestion = questions.length -1;
let currentQuestion = 0;

function renderQuestion() {
  let q = questions[currentQuestion];
  $('#question').empty().append("<h4>" + q.question + "</h4>");
  $('#A').text("A. " + q.choiceA);
  $('#B').text("B. " + q.choiceB);
  $('#C').text("C. " + q.choiceC);
  $('#D').text("D. " + q.choiceD);
}
//renderQuestion();

// check answer 
function checkAnswer(answer){
  if (answer == questions[currentQuestion].correct) {
    //answer is correct
    score++;
    $("#result").text("Your answer was correct!"); 
  } else {
    //answer is incorrect 
    $("#result").text("Your answer was incorrect! You lost 5 seconds off of your time.");
    secondsLeft-=5;
    $(timeEl).text(secondsLeft);
  }
  currentQuestion++;
  if (currentQuestion === questions.length) {
    endQuiz();
  } else {
    renderQuestion();
  }
}
function endQuiz(){
  console.log("Hit end quiz function.");
  clearInterval(timerInterval);
  //give score 
  alert("You got " + score + " out of " + questions.length + " correct.");
  //close modal
  modal.style.display = "none";
  prompt("Enter your initials to save your high score.");
}

// var user = {
//     initials: initialsInput.value.trim(),
//     userScore: userScore.value.trim()
//   };

// // give user their final score. 
// alert("You got " + score + " out of " + questions.length + " correct.");
// prompt("Enter your initials to save your score.");

