let humanScore = 0;
let computerScore = 0;

const result = document.getElementById("result");
const score = document.getElementById("score");

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    const choice = prompt("Choose rock, paper, or scissors:");

    return choice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        result.textContent =
            "It's a tie! You both chose " + humanChoice + ".";
    }

    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;

        result.textContent =
            "You win! " + humanChoice + " beats " + computerChoice + ".";
    }

    else {
        computerScore++;

        result.textContent =
            "You lose! " + computerChoice + " beats " + humanChoice + ".";
    }

    score.textContent =
        "Your score: " + humanScore +
        " | Computer score: " + computerScore;
}

function playGame() {

    for (let i = 0; i < 5; i++) {

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        result.textContent += " You won the game!";
    }
    else if (computerScore > humanScore) {
        result.textContent += " The computer won the game!";
    }
    else {
        result.textContent += " The game is a tie!";
    }
}

playGame();