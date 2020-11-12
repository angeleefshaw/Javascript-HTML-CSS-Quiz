
const countdownEl = document.getElementById('timer');
const startBtn = document.getElementById('startQuiz')
const answer = document.getElementById('correct')
//const wrongAnswer= document.querySelector('')
const finalScore = []

const startingMinutes = .25;
let time = startingMinutes * 60;
const displayTime = setInterval(updateCountdown, 1000);

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    countdownEl.innerHTML = `${minutes}:${seconds}`;
    time--;
    if (seconds === 0) document.location.href = ('./score.html')
}

answer.addEventListener('click', e => {
    e.preventDefault 
    //alert('correct!')
    if(true) finalScore.push(25)
    answer.style.backgroundColor = 'lightgreen';
    console.log(finalScore)
    }
)

