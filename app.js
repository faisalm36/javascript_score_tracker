// JavaScript source code
const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const resetButton = document.querySelector('#reset')
const p1DisplayScore = document.querySelector('#p1DisplayScore');
const p2DisplayScore = document.querySelector('#p2DisplayScore');
const winningScoreSelect = document.querySelector('#playto');

let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let isGameOver = false;





p1Button.addEventListener('click', function() {
    if(!isGameOver) {
        p1Score += 1;
        if (p1Score === winningScore) {
            isGameOver = true;
            p1DisplayScore.classList.add('has-text-success');
            p2DisplayScore.classList.add('has-text-danger');
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        p1DisplayScore.textContent = p1Score;

    }
})

p2Button.addEventListener('click', function() {
    if(!isGameOver) {
        p2Score += 1;
        if (p2Score === winningScore) {
            isGameOver = true;
            p2DisplayScore.classList.add('has-text-success');
            p1DisplayScore.classList.add('has-text-danger');
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        p2DisplayScore.textContent = p2Score;

    }
})

winningScoreSelect.addEventListener('change', function() {
    winningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click', reset)

function reset() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1DisplayScore.textContent = 0;
    p2DisplayScore.textContent = 0;
    p1DisplayScore.classList.remove('has-text-success', 'has-text-danger');
    p2DisplayScore.classList.remove('has-text-success','has-text-danger');
    p1Button.disabled = false;
    p2Button.disabled = false;
}
