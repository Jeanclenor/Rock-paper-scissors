let userScore = 0;
let computerScore = 0;

const userChoiceDisplay = document.getElementById("user-result");
const computerChoiceDisplay = document.getElementById("computer-result");
const winnerDisplay = document.getElementById("winner");
const userScoreDisplay = document.getElementById("user-score");
const computerScoreDisplay = document.getElementById("computer-score");

const userInput = document.getElementById("user-input");

function battle() {
  const userChoice = userInput.value;
  const possibleChoices = ["Rock", "Paper", "Scissor"];
  const computerChoice = possibleChoices[Math.floor(Math.random() * possibleChoices.length)];

  userChoiceDisplay.textContent = userChoice;
  computerChoiceDisplay.textContent = computerChoice;

  if (userChoice === computerChoice) {
    winnerDisplay.textContent = "It's a tie!";
  } else if (
    (userChoice === "Rock" && computerChoice === "Scissor") ||
    (userChoice === "Paper" && computerChoice === "Rock") ||
    (userChoice === "Scissor" && computerChoice === "Paper")
  ) {
    winnerDisplay.textContent = "You win!";
    userScore++;
  } else {
    winnerDisplay.textContent = "Computer wins!";
    computerScore++;
  }

  userScoreDisplay.textContent = userScore;
  computerScoreDisplay.textContent = computerScore;
}

userInput.addEventListener('change', battle);