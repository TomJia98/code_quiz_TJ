const beginQuizButton = document.querySelector("#begin-quiz-button");
const firstPage = document.querySelector("#first-page");
const activeQuiz = document.querySelector("#questions-page");
const correctAnswer = document.querySelector("#correct-answer");
const incorrectAnswer = document.querySelector("#incorrect-answer");
const highscoresPage = document.querySelector("#highscore-page");
const timer = document.querySelector("#timer");
const questionEl =  document.querySelector("#question");
const buttonsEl =  document.querySelector("#buttons");
const guessEl = document.querySelector("#is-guess");

const buttonAnswer1 = document.getElementById("answer 1");
const buttonAnswer2 = document.getElementById("answer 2");
const buttonAnswer3 = document.getElementById("answer 3");
const buttonAnswer4 = document.getElementById("answer 4");


var timeLeft = 60;
//getting all the associated divs from the HTML


const question1 = {
    question: "In javascript, what character should follow each finished line of code?",
    answer1: "Question mark '?'",
    isAnswer1: false,
    answer2: "Semicolon ';'",
    isAnswer2: true,
    answer3: "Comma ','",
    isAnswer3: false,
    answer4: "Donald Duck",
    isAnswer4: false
}

const question2 = {
    question: "What number does javascript start counting array elements with?",
    answer1: "Zero",
    isAnswer1: true,
    answer2: "One",
    isAnswer2: false,
    answer3: "Five",
    isAnswer3: false,
    answer4: "Uno",
    isAnswer4: false
    }

const question3 = {
    question: ".setAttribute() is an example of ?",
    answer1: "An attribute",
    isAnswer1: false,
    answer2: "A method",
    isAnswer2: true,
    answer3: "A preinundulator",
    isAnswer3: false,
    answer4: "A function",
    isAnswer4: false
    }
    
const question4 = {
    question: "What cannot be stored in a pages local storage",
    answer1: "Livestock",
    isAnswer1: false,
    answer2: "Arrays",
    isAnswer2: false,
    answer3: "Objects",
    isAnswer3: false,
    answer4: "All of the above",
    isAnswer4: true
    }


const question5 = {
    question: "_______ is NOT an example of an equality operator",
    answer1: "===",
    isAnswer1: false,
    answer2: "!=",
    isAnswer2: false,
    answer3: "=",
    isAnswer3: true,
    answer4: "==",
    isAnswer4: false
    }
  

function countdownTimer() {
    // var timeLeft = 60;
  var timeInterval = setInterval(function () {
    timer.textContent = timeLeft;
    timeLeft--;

    if (timeLeft < 1) {
      clearInterval(timeInterval);

      timer.textContent = "Game Over";
      
      displayMessage();// change this callback to "end quiz"
    }
  
      


    

  }, 1000);



};

function loadQ2(){
  questionEl.textContent = question2.question;

buttonAnswer1.textContent = question2.answer1;
buttonAnswer1.setAttribute("data-isAnswer", question2.isAnswer1);

buttonAnswer2.textContent = question2.answer2;
buttonAnswer2.setAttribute("data-isAnswer", question2.isAnswer2);

buttonAnswer3.textContent = question2.answer3;
buttonAnswer3.setAttribute("data-isAnswer", question2.isAnswer3);

buttonAnswer4.textContent = question2.answer4;
buttonAnswer4.setAttribute("data-isAnswer", question2.isAnswer4);
};

function loadQ3(){
  questionEl.textContent = question3.question;

buttonAnswer1.textContent = question3.answer1;
buttonAnswer1.setAttribute("data-isAnswer", question3.isAnswer1);

buttonAnswer2.textContent = question3.answer2;
buttonAnswer2.setAttribute("data-isAnswer", question3.isAnswer2);

buttonAnswer3.textContent = question3.answer3;
buttonAnswer3.setAttribute("data-isAnswer", question3.isAnswer3);

buttonAnswer4.textContent = question3.answer4;
buttonAnswer4.setAttribute("data-isAnswer", question3.isAnswer4);
};

function loadQ4(){
  questionEl.textContent = question4.question;

buttonAnswer1.textContent = question4.answer1;
buttonAnswer1.setAttribute("data-isAnswer", question4.isAnswer1);

buttonAnswer2.textContent = question4.answer2;
buttonAnswer2.setAttribute("data-isAnswer", question4.isAnswer2);

buttonAnswer3.textContent = question4.answer3;
buttonAnswer3.setAttribute("data-isAnswer", question4.isAnswer3);

buttonAnswer4.textContent = question4.answer4;
buttonAnswer4.setAttribute("data-isAnswer", question4.isAnswer4);
};

function loadQ5(){
  questionEl.textContent = question5.question;

buttonAnswer1.textContent = question5.answer1;
buttonAnswer1.setAttribute("data-isAnswer", question5.isAnswer1);

buttonAnswer2.textContent = question5.answer2;
buttonAnswer2.setAttribute("data-isAnswer", question5.isAnswer2);

buttonAnswer3.textContent = question5.answer3;
buttonAnswer3.setAttribute("data-isAnswer", question5.isAnswer3);

buttonAnswer4.textContent = question5.answer4;
buttonAnswer4.setAttribute("data-isAnswer", question5.isAnswer4);
};

const loadQuestions = [
  loadQ2(), loadQ3, loadQ4, loadQ5,
];
var currentQuestion = 0;


function guess(isCorrect) {
  if (isCorrect == "yes") {
    guessEl.textContent = "Correct";
    setTimeout(function(){
      guessEl.textContent = "";
  }, 500);
  }

 
  else if (isCorrect == "no"){
    guessEl.textContent = "incorrect";
    timeLeft = timeLeft - 10;    
    setTimeout(function(){
      guessEl.textContent = "";
  }, 500);
  }
}


beginQuizButton.addEventListener("click", function startQuiz(){
firstPage.setAttribute("style", "display:none;");
activeQuiz.setAttribute("style", "display:inline;");
countdownTimer();
// sets the question section of the quiz as active 
questionEl.textContent = question1.question;

buttonAnswer1.textContent = question1.answer1;
buttonAnswer1.setAttribute("data-isAnswer", question1.isAnswer1);

buttonAnswer2.textContent = question1.answer2;
buttonAnswer2.setAttribute("data-isAnswer", question1.isAnswer2);

buttonAnswer3.textContent = question1.answer3;
buttonAnswer3.setAttribute("data-isAnswer", question1.isAnswer3);

buttonAnswer4.textContent = question1.answer4;
buttonAnswer4.setAttribute("data-isAnswer", question1.isAnswer4);


})

buttonsEl.addEventListener('click', function isAnswer(event){
  if (event.target.dataset.isanswer == "true"){

guess("yes");

loadQuestions[currentQuestion];
currentQuestion++;
  }
else {
  guess("no");

  loadQuestions[currentQuestion];
  currentQuestion++;}

})

//add event listener to buttons 
//if the button is isAnswer == true, display correct, and load next question
//if the button is isAnswer == false, display wrong, load next question, and take 10 seconds from timer


















