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

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        let result = determineWinner(humanChoice, computerChoice);
        console.log(result);
        if (result.includes("win")) {
            humanScore++;
        } else if (result.includes("lose")) {
            computerScore++;
        }
        console.log("Human Score: " + humanScore);
        console.log("Compter Score: " + computerScore);
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

    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());

    if (humanScore === computerScore) {
        console.log("You tied with the computer!")
    } else if (humanScore > computerScore) {
        console.log("Player wins!");
    } else {
        console.log("Computer wins!")
    }
}

playGame();