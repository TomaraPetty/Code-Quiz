# Code-Quiz

<a href="https://tomararuth.github.io/Code-Quiz/">Click here to try the quiz here!</a>

# Overview
The Code-Quiz will test the users coding knowledge. User will be asked 5 multiple choice questions. They are granted 10 seconds per question to get through the quiz, 50 seconds total. If they answer a question wrong then they loose 5 seconds off of their time. At the end of the quiz they can enter their initials and save their high score. The results from the top scores will be stored in local storage and ranked in order.  

# Tech

* Quiz is styled with CSS and Bootstrap. 
* First page is just a start button.
* Using Javascript and jQuery an event listener is added on click of the start button. 
* Start button triggers the timer to start and the first module to open with questions.  
* The questions are displayed in the module with four buttons to choose from. Each button contains an answer.
* After user chooses an answer the quiz will move to the next question and append whether or not the answer was correct to the bottom of the module.
* When the quiz questions are finished the first module will close and the second module will open.
* Second module offers the user to save their high score and view the top scores.
* After saving the user has the option to take the quiz again which clears the quiz and starts over.

<img src="./codequiz.gif">