const beginQuizButton = document.querySelector("#begin-quiz-button");
const firstPage = document.querySelector("#first-page");
const activeQuiz = document.querySelector("#questions-page");
const highscoresPage = document.querySelector("#highscore-page");
const highscoresFirstPage = document.querySelector("#highscores-firstpage");
const highscoreDisplay = document.querySelector("#highscore-list");
const timer = document.querySelector("#timer");
const questionEl =  document.querySelector("#question");
const guessEl = document.querySelector("#is-guess");
const enterInitals = document.querySelector("#enter-initials");
const submitButton = document.querySelector("#submit");
const initials = document.querySelector("#initials");
const resetScores = document.querySelector("#reset");
const buttonsEl =  document.querySelector("#buttons");
const buttonAnswer1 = document.getElementById("answer 1");
const buttonAnswer2 = document.getElementById("answer 2");
const buttonAnswer3 = document.getElementById("answer 3");
const buttonAnswer4 = document.getElementById("answer 4");

//getting all the associated divs from the HTML

var timeLeft = 60;
var highscoreTime = 0;
var currentQuestion = 0;
var gameNotTimedOut = false;

//setting up all the working variables to be changed later

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
    question: "What cannot be stored in a pages local storage?",
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
    question: "Which of the following is NOT an example of an equality operator?",
    answer1: "===",
    isAnswer1: false,
    answer2: "!=",
    isAnswer2: false,
    answer3: "=",
    isAnswer3: true,
    answer4: "==",
    isAnswer4: false
    }
  //adding all the questions, all following the same semantics
    

function countdownTimer() {
  var timeInterval = setInterval(function () {
    
    timer.textContent = timeLeft;
    timeLeft--;

    if (timeLeft < 0 && !gameNotTimedOut) {
      timeLeft = "DNF"
      clearInterval(timeInterval);
      loadHighscore();
    }
  }, 1000);
};
//setting up the timer, with interupts to change it when a guess is wrong, and to stop it if the quiz is over

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
//creating all the load functions to change which question and answer pairs are being displayed 
//(could probably be broken down into arrays and done with a for loop)
function loadHighscore(){
  activeQuiz.setAttribute("style", "display:none;");
  enterInitals.setAttribute("style", "display:inline;");
  highscoreTime = timeLeft;
gameNotTimedOut = true;
}
//loads the initials input section, stores the time at quiz finish, and stops the timer

const loadQuestions = [loadQ2, loadQ3, loadQ4, loadQ5, loadHighscore];
//sets the order of questions, and loads highscore page after last question


function guess(isCorrect) {
  if (isCorrect == "yes") {
    guessEl.textContent = "Correct";
    setTimeout(function(){
      guessEl.textContent = "";
  }, 500);
  }
  else if (isCorrect == "no"){
    guessEl.textContent = "Incorrect";
    timeLeft = timeLeft - 10;    
    setTimeout(function(){
      guessEl.textContent = "";
  }, 500);
  }
}
//adds the incorrecct/correct popup upon making a guess and clears it 500ms later, removes 10 seconds from a wrong guess

function showHighscores(){
  enterInitals.setAttribute("style", "display:none;");
  firstPage.setAttribute("style", "display:none;");
  highscoresPage.setAttribute("style", "display:inline;")

  var hScores = JSON.parse(localStorage.getItem("scores"));
  for (var i = 0; i < hScores.length; i++){
      var liEl = document.createElement("li");
      liEl.textContent = hScores[i];
      highscoreDisplay.appendChild(liEl);
  }
}
//sets the highscore section to active, checks and displays the current highscores in localStorage

highscoresFirstPage.addEventListener("click", showHighscores)
//allows the highscore button on pagestart to link to highscores


beginQuizButton.addEventListener("click", function startQuiz(){
      firstPage.setAttribute("style", "display:none;");
      activeQuiz.setAttribute("style", "display:inline;");
      countdownTimer();
      // sets the question section of the quiz as active and starts the timer
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
//loads the first set of questions

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
}})
// checks if the selected answer is correct, subtracts 10 seconds from timer if not, loads next question for both

submitButton.addEventListener("click", function addHighscore(event){
event.preventDefault();
var currentHighscore = initials.value;
var newLi = currentHighscore + " - " + highscoreTime;
var x = []
if (localStorage.getItem("scores") != undefined ){
var a1 = localStorage.getItem("scores");
var a2 = JSON.parse(a1);
console.log(a2);
for (var i = 0; i < a2.length; i++){
  x.push(a2[i]);
}}
//checks if localStorage contains anything, and adds it to an array if it does
x.push(newLi);
var z =JSON.stringify(x) 
localStorage.setItem("scores", z);
showHighscores();
})
//adds the new score to an array(which might contain previous scores), and sends it to localStorage, loads highscores

resetScores.addEventListener("click", function reset(){
  highscoreDisplay.setAttribute("style", "display:none;")
localStorage.clear();
showHighscores();
})
//clears the highscore page and resets the localStorage upon clicking the reset button 






















