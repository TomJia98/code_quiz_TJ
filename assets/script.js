const beginQuizButton = document.querySelector("#begin-quiz-button");
const firstPage = document.querySelector("#first-page");
const activeQuiz = document.querySelector("#questions-page");
const correctAnswer = document.querySelector("#correct-answer");
const incorrectAnswer = document.querySelector("#incorrect-answer");
const highscoresPage = document.querySelector("#highscore-page");
const timer = document.querySelector("#timer");
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
    question: "",
    answer1: "Question mark '?'",
    isAnswer1: false,
    answer2: "Semicolon ';'",
    isAnswer2: true,
    answer3: "Comma ','",
    isAnswer3: false,
    answer4: "Donald Duck",
    isAnswer4: false
    }


function countdownTimer() {
    var timeLeft = 60;
  var timeInterval = setInterval(function () {
    timer.textContent = timeLeft;
    timeLeft--;

    if (timeLeft === 0) {
      clearInterval(timeInterval);

      displayMessage();// change this callback to "end quiz"
    }
  
      


    

  }, 1000);



}








beginQuizButton.addEventListener("click", function startQuiz(){
firstPage.setAttribute("style", "display:none;");
activeQuiz.setAttribute("style", "display:inline;");
countdownTimer();
})




















