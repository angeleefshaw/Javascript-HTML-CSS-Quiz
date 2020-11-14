const countdownEl = document.getElementById("timer");
const startBtn = document.getElementById("startQuiz");
const answer = document.querySelectorAll("button"); 
const score = document.getElementById("score");
// select all questions
const questions = document.querySelectorAll(".Question");
// get placeholder for score text
const scoreText = document.querySelector("#socreText");
const finalScore = [];
const nextQuestionsBtns = document.querySelectorAll(".nextQ");

const quitBtns = document.querySelectorAll(".quit");
const startingMinutes = 0.25;
let time = startingMinutes * 60;

// prevent multiple clicks
let alreadyAnswered = false;
// initialize current question counter
let currQuestion = 0;
// hide all question
for (let q of questions) {
  q.style.display = "none";
}
// hide score
score.style.display = "none";
// hide timer
countdownEl.style.display = "none";

// add event listeners to all next questions links
for (let nextQ of nextQuestionsBtns) {
  nextQ.addEventListener("click", () => {
    // hide current question
    questions[currQuestion].style.display = "none";
    currQuestion++;
    if (currQuestion == questions.length) {
      // reach the end of quiz, show score
      let scoreNum = 0;
      for (let num of finalScore) scoreNum += num;
      scoreText.textContent = scoreNum;
      score.style.display = "block";
      // hide timer
      countdownEl.style.display = "none";
    } else {
      // show next question and set already answered to false
      alreadyAnswered = false;
      // update time
      time = startingMinutes * 60;
      questions[currQuestion].style.display = "block";
    }
  });
}
// if click on quit take to main page and hide everything
for (let btn of quitBtns) {
  btn.addEventListener("click", () => {
    location.href = "https://angeleefshaw.github.io/Javascript-HTML-CSS-Quiz/";
  });
}

function updateCountdown() {
  if (time < 0) return;
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;
  countdownEl.innerHTML = `${minutes}:${seconds}`;
  time--;
  if (seconds <= 0) {
    // show score screen
    questions[currQuestion].style.display = "none";
    // reach the end show score
    let scoreNum = 0;
    for (let num of finalScore) scoreNum += num;
    scoreText.textContent = scoreNum;
    score.style.display = "block";
    // hide timer
    countdownEl.style.display = "none";
  }
}

// when click on start show questionOne
startBtn.addEventListener("click", () => {
  // show first question with timer
  // hide startBtn
  startBtn.style.display = "none";
  questions[0].style.display = "block";
  countdownEl.style.display = "block";
  // update time
  time = startingMinutes * 60;
  setInterval(updateCountdown, 1000);
});

// add event listeners to all answers;
for (let btn of answer) {
  btn.addEventListener("click", (e) => {
    e.preventDefault;
    //alert('correct!')
    if (!alreadyAnswered) {
      if (btn.classList.contains("correct")) {
        finalScore.push(25);
        btn.style.backgroundColor = "lightgreen";
      } else {
        btn.style.backgroundColor = "lightcoral";
      }
    }
    alreadyAnswered = true;
  });
}
