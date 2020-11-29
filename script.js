// Start button - add event listener 
// Score keeper - activity 11 increment/decrement & activity 18 shopping cart 
// Timer starts and activates first question activity 8 - timer + 29 timer app 
// End quiz when all questions are answered or timer reaches 0 - should go through TODO 25 & 26
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

var secondsLeft = 30;
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
    $("#result").text("You are correct!"); 
  } else {
    //answer is incorrect 
    $("#result").text("Your answer is incorrect! You loose 5 seconds off of your time.");
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
}

// start.addEventListener("click", startQuiz);


// start.style.display = "none";
// renderQuestion();
// quiz.style.display = "block";



// // give user their final score. 
// alert("You got " + score + " out of " + questions.length + " correct.");
// }
