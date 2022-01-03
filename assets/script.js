const beginQuizButton = document.querySelector("#begin-quiz-button");
const firstPage = document.querySelector("#first-page");
const activeQuiz = document.querySelector("#questions-page");
const correctAnswer = document.querySelector("#correct-answer");
const incorrectAnswer = document.querySelector("#incorrect-answer");
const highscoresPage = document.querySelector("#highscore-page");
const timer = document.querySelector("#timer");

const buttonAnswer1 = document.getElementById("answer 1");
const buttonAnswer2 = document.getElementById("answer 2");
const buttonAnswer3 = document.getElementById("answer 3");
const buttonAnswer4 = document.getElementById("answer 4");
//getting all the associated divs from the HTML


const question1 = {
    question: "What character should follow each finished line of code?",
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
    answer1: "Five",
    isAnswer1: false,
    answer2: "One",
    isAnswer2: false,
    answer3: "Uno",
    isAnswer3: false,
    answer4: "Zero",
    isAnswer4: true
    }


function countdownTimer() {
    var timeLeft = 60;
  var timeInterval = setInterval(function () {
    timer.textContent = timeLeft;
    timeLeft--;

    if (timeLeft < 1) {
      clearInterval(timeInterval);

      timer.textContent = "Game Over";
      
      displayMessage();// change this callback to "end quiz"
    }
  
      


    

  }, 100);



}








beginQuizButton.addEventListener("click", function startQuiz(){
firstPage.setAttribute("style", "display:none;");
activeQuiz.setAttribute("style", "display:inline;");
countdownTimer();
// sets the question section of the quiz as active 


buttonAnswer1.textContent = question1.answer1;
buttonAnswer1.setAttribute("data-isAnswer", question1.isAnswer1);

buttonAnswer2.textContent = question1.answer2;
buttonAnswer1.setAttribute("data-isAnswer", question1.isAnswer2);

buttonAnswer3.textContent = question1.answer3;
buttonAnswer1.setAttribute("data-isAnswer", question1.isAnswer3);

buttonAnswer4.textContent = question1.answer4;
buttonAnswer1.setAttribute("data-isAnswer", question1.isAnswer4);


})




















