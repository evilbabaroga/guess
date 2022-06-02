let score = 20;
let highscore = 0;

const body = document.querySelector("body");
const scoreText = document.querySelector('#scoreText');
const guessingText = document.querySelector('#guessingText');
const highscoreText = document.querySelector('#highScoreText');
const guessedNumberElement = document.querySelector('#guessedNumber');

const generateSecretNumber = function () {
    return Math.trunc(Math.random() * 20) + 1;
}

const resetGame = function() {
    score = 20;
    document.getElementById("checkButton").onclick = function() {checkSecretNumber()};
    secretNumber = generateSecretNumber();
    setScore(20);
    guessedNumberElement.innerHTML = "?";
    checkText.value = "";
    guessingText.innerHTML = "Start guessing...";
    body.style['background-color'] = "rgb(30, 30, 30)";
}

const setScore = function (score) {
    scoreText.innerHTML = "💯 Score: " + score;
}

const checkSecretNumber = function(){
    const guessedNumber = Number(checkText.value)
    if (Number.isInteger(guessedNumber)) {
        if (guessedNumber !== secretNumber) {
            setScore(--score);
            if (score === 0) {
                body.style['background-color'] = "red";
                document.getElementById("checkButton").onclick = function() {};
                guessingText.innerHTML = "💣 GAMER OVER!"
                return;
            }
            console.log(guessedNumber, secretNumber);
            if (guessedNumber < secretNumber) {
                guessingText.textContent = "⬇ Too low!";
            } else if (guessedNumber > secretNumber){
                guessingText.textContent = "⬆ Too high!";
            }
        } else if (guessedNumber === secretNumber) {
            body.style['background-color'] = "green";
            document.getElementById("checkButton").onclick = function() {};
            guessingText.innerHTML = "🎉 Congratulations, YOU WON!"
            guessedNumberElement.innerHTML = secretNumber;

            if (score > highscore){
                highscore = score;
                highscoreText.innerHTML = "🥇 Highscore: " + highscore;
            }           
        }
    }
}

let secretNumber = generateSecretNumber();

document.getElementById("againButton").onclick = function() {resetGame()};

document.getElementById("checkButton").onclick = function() {checkSecretNumber()};