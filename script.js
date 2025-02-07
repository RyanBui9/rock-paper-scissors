function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    let randomInt = getRandomInt(3);
    if (randomInt == 0) {
        return "rock";
    } else if (randomInt == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    return prompt("Rock, Paper or Scissors?");
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("click", (event) => {
            playRound(event.target.textContent, getComputerChoice());
        });
    });

    function playRound(humanChoice, computerChoice) {

        humanChoice = humanChoice.toLowerCase();
        let result = determineWinner(humanChoice, computerChoice);
        if (result.includes("win")) {
            humanScore++;
        } else if (result.includes("lose")) {
            computerScore++;
        }

        const resultsContainer = document.getElementById("result");
        const currWinner = document.createElement("div");
        currWinner.id = "result";
        currWinner.textContent = result;
        resultsContainer.replaceWith(currWinner);

        const humanContainer = document.getElementById("human");
        const updatedHumanScore = document.createElement("div");
        updatedHumanScore.id = humanContainer.id;
        updatedHumanScore.textContent = "Human Score: " + humanScore;
        humanContainer.replaceWith(updatedHumanScore);

        const computerContainer = document.getElementById("computer");
        const updatedComputerScore = document.createElement("div");
        updatedComputerScore.id = computerContainer.id;
        updatedComputerScore.textContent = "Computer Score: " + computerScore;
        computerContainer.replaceWith(updatedComputerScore);

        const body = document.querySelector("body");
        if (humanScore === 5 || computerScore === 5) {
            const announceWinner = document.createElement("div");
            if (humanScore === computerScore) {
                announceWinner.textContent = "You tied with the computer!";
            } else if (humanScore > computerScore) {
                announceWinner.textContent = "Player wins!";
            } else {
                announceWinner.textContent = "Computer wins!";
            }
            body.appendChild(announceWinner);
        }
    }

    function determineWinner(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            return "It's a tie!"
        }

        if (humanChoice === "rock") {
            if (computerChoice === "scissors") {
                return "You win! Rock beats scissors";
            } else {
                return "You lose! Paper beats Rock";
            }
        }

        if (humanChoice === "paper") {
            if (computerChoice === "rock") {
                return "You win! Paper beats rock";
            } else {
                return "You lose! Scissors beats paper";
            }
        }

        if (humanChoice === "scissors") {
            if (computerChoice === "paper") {
                return "You win! Scissors beats paper";
            } else {
                return "You lose! Rock beats scissors";
            }
        }
    }
}

playGame();