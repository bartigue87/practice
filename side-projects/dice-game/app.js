// Create variables for the game state
let player1Score = 0;
let player2Score = 0;
let player1Turn;

// Create variables to store references to the necessary DOM nodes
const player1Dice = document.getElementById("player1Dice");
const player2Dice = document.getElementById("player2Dice");
const player1Scoreboard = document.getElementById("player1Scoreboard");
const player2Scoreboard = document.getElementById("player2Scoreboard");
const message = document.getElementById("message");
const rollBtn = document.getElementById("rollBtn");
const resetBtn = document.getElementById("resetBtn");
const startBtn = document.getElementById("startBtn");
const riskBtn = document.getElementById("riskBtn");
const em = document.getElementById("em");

function showResetButton() {
  rollBtn.style.display = "none";
  resetBtn.style.display = "block";
}

function showRollBtn() {
  rollBtn.style.display = "block";
  riskBtn.style.display = "block";
  startBtn.style.display = "none";
  em.style.display = "block";
}

startBtn.addEventListener("click", function () {
  const randomNumber = Math.floor(Math.random() * 2);
  console.log(randomNumber);

  if (randomNumber === 0) {
    player1Turn = true;
    message.textContent = "Player 1 Rolls First";
    showRollBtn();
  } else if (randomNumber === 1) {
    player1Turn = false;
    message.textContent = "Player 2 Rolls First";
    player2Dice.classList.add("active");
    player1Dice.classList.remove("active");
    showRollBtn();
  }
});

/* Hook up a click event listener to the Roll Dice Button. */
rollBtn.addEventListener("click", function () {
  const randomNumber = Math.floor(Math.random() * 6) + 1;

  if (player1Turn) {
    player1Score += randomNumber;
    player1Scoreboard.textContent = player1Score;
    player1Dice.textContent = randomNumber;
    player1Dice.classList.remove("active");
    player2Dice.classList.add("active");
    message.textContent = "Player 2 Turn";
  } else {
    player2Score += randomNumber;
    player2Scoreboard.textContent = player2Score;
    player2Dice.textContent = randomNumber;
    player2Dice.classList.remove("active");
    player1Dice.classList.add("active");
    message.textContent = "Player 1 Turn";
  }

  if (player1Score >= 20) {
    message.textContent = "Player 1 Won 🥳";
    riskBtn.style.display = "none";
    em.style.display = "none";
    showResetButton();
  } else if (player2Score >= 20) {
    message.textContent = "Player 2 Won 🎉";
    riskBtn.style.display = "none";
    em.style.display = "none";
    showResetButton();
  }
  player1Turn = !player1Turn;
});

riskBtn.addEventListener("click", function () {
  console.log("click");
  const riskNumber = Math.floor(Math.random() * 2);
  let randomNumber = 0;

  if (riskNumber === 0) {
    randomNumber = +6;
  } else if (riskNumber === 1) {
    randomNumber = -2;
  }
  console.log(riskNumber);

  if (player1Turn) {
    player1Score += randomNumber;
    player1Scoreboard.textContent = player1Score;
    player1Dice.textContent = randomNumber;
    player1Dice.classList.remove("active");
    player2Dice.classList.add("active");
    message.textContent = "Player 2 Turn";
  } else {
    player2Score += randomNumber;
    player2Scoreboard.textContent = player2Score;
    player2Dice.textContent = randomNumber;
    player2Dice.classList.remove("active");
    player1Dice.classList.add("active");
    message.textContent = "Player 1 Turn";
  }

  if (player1Score >= 20) {
    message.textContent = "Player 1 Won 🥳";
    showResetButton();
  } else if (player2Score >= 20) {
    message.textContent = "Player 2 Won 🎉";
    showResetButton();
  }
  player1Turn = !player1Turn;
});

resetBtn.addEventListener("click", function () {
  reset();
});

function reset() {
  player1Score = 0;
  player2Score = 0;
  player1Scoreboard.textContent = 0;
  player2Scoreboard.textContent = 0;
  player1Dice.textContent = "-";
  player2Dice.textContent = "-";
  message.textContent = "Player 1 Turn";
  resetBtn.style.display = "none";
  rollBtn.style.display = "none";
  startBtn.style.display = "block";
  player2Dice.classList.remove("active");
  player1Dice.classList.add("active");
}
