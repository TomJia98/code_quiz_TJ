const beginQuizButton = document.querySelector("#begin-quiz-button");
const firstPage = document.querySelector("#first-page");
const activeQuiz = document.querySelector("#questions-page");
const correctAnswer = document.querySelector("#correct-answer");
const incorrectAnswer = document.querySelector("#incorrect-answer");
const highscoresPage = document.querySelector("#highscore-page");
const timer = document.querySelector("#timer");
//getting all the associated divs from the HTML

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




















