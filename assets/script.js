const beginQuizButton = document.querySelector("#begin-quiz-button");
const firstPage = document.querySelector("#first-page");
const activeQuiz = document.querySelector("#questions-page");
const correctAnswer = document.querySelector("#correct-answer");
const incorrectAnswer = document.querySelector("#incorrect-answer");
const highscoresPage = document.querySelector("#highscore-page");
const highscoresFirstPage = document.querySelector("#highscores-firstpage");

const highscoreDisplay = document.querySelector("#highscore-list");
const timer = document.querySelector("#timer");
const questionEl =  document.querySelector("#question");
const buttonsEl =  document.querySelector("#buttons");
const guessEl = document.querySelector("#is-guess");
const enterInitals = document.querySelector("#enter-initials");
const submitButton = document.querySelector("#submit");
const initials = document.querySelector("#initials");


const buttonAnswer1 = document.getElementById("answer 1");
const buttonAnswer2 = document.getElementById("answer 2");
const buttonAnswer3 = document.getElementById("answer 3");
const buttonAnswer4 = document.getElementById("answer 4");

// var scoresArray = [];

// if (localStorage.getItem("scores")==undefined){
// localStorage.setItem("scores", scoresArray);
// }

//getting all the associated divs from the HTML

var timeLeft = 60;
var highscoreTime = 0;


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
  
    var gameNotTimedOut = false;

function countdownTimer() {
  var timeInterval = setInterval(function () {
    
    timer.textContent = timeLeft;
    timeLeft--;

    if (timeLeft < 1 && !gameNotTimedOut) {
      clearInterval(timeInterval);

      timer.textContent = "Game Over";
      
      loadHighscore();
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
function loadHighscore(){
  activeQuiz.setAttribute("style", "display:none;");
  enterInitals.setAttribute("style", "display:inline;");
  highscoreTime = timeLeft;
gameNotTimedOut = true;



}


const loadQuestions = [
  loadQ2, loadQ3, loadQ4, loadQ5, loadHighscore
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


function showHighscores(){
  enterInitals.setAttribute("style", "display:none;");
  firstPage.setAttribute("style", "display:none;");
  highscoresPage.setAttribute("style", "display:inline;")
  highscoreDisplay.textContent = JSON.parse(localStorage.getItem("scores"));
  // highscoreDisplay.textContent = localStorage.getItem("scores");


}
highscoresFirstPage.addEventListener("click", showHighscores)


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

loadQuestions[currentQuestion]();
currentQuestion++;
  }
else  if (event.target.dataset.isanswer == "false"){
  guess("no");

  loadQuestions[currentQuestion]();
  currentQuestion++;
}

})

submitButton.addEventListener("click", function addHighscore(event){
event.preventDefault();
var currentHighscore = initials.value;
// enterInitals.setAttribute("style", "display:none;");
// highscoresPage.setAttribute("style", "display:inline;")

// var newLi = document.createElement('li');


var newLi = currentHighscore + " - " + highscoreTime + "s";
console.log(newLi);
var x = []//localStorage.getItem("scores");
if(localStorage.getItem("scores")!=undefined||localStorage.getItem("scores")!=null){
x.push(JSON.parse(localStorage.getItem("scores")));
}
else{
x.push(newLi);
console.log(x);
x = JSON.stringify(x);
console.log(x);
localStorage.setItem("scores", x);
}
showHighscores();
})






















