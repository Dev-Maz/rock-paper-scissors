function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissors";
            break;
    }
}

// Refactored Code
function playRound(playerSelection, computerSelection) {
    console.log(`Player's choice: ${playerSelection}`);
    console.log(`Computer's choice: ${computerSelection}`);

    switch (playerSelection) {
        case "Rock":
            switch (computerSelection) {
                case "Rock":
                    return " Tie!";
                    break;
                case "Paper":
                    return `2You lose! ${computerSelection} beats ${playerSelection}`;
                    break;
                case "Scissors":
                    return `1You win! ${playerSelection} beats ${computerSelection}`;
                    break;
            }
            break;

        case "Paper":
            switch (computerSelection) {
                case "Rock":
                    return `1You win! ${playerSelection} beats ${computerSelection}`;
                    break;
                case "Paper":
                    return " Tie!";
                    break;
                case "Scissors":
                    return `2You lose! ${computerSelection} beats ${playerSelection}`;
                    break;
            }
            break;

        case "Scissors":
            switch (computerSelection) {
                case "Rock":
                    return `2You lose! ${computerSelection} beats ${playerSelection}`;
                    break;
                case "Paper":
                    return `1You win! ${playerSelection} beats ${computerSelection}`;
                    break;
                case "Scissors":
                    return " Tie!";
                    break;
            }
            break;
    }
}

// Refactored Code
function game(playerSelection) {
    let result = playRound(playerSelection, getComputerChoice());

    if (result.charAt(0) === "1") {
        const playerScoreDiv = document.querySelector('#player');
        playerScoreDiv.textContent = `Player's Score: ${++playerScore}`;
    } else if (result.charAt(0) === "2") {
        const computerScoreDiv = document.querySelector('#computer');
        computerScoreDiv.textContent = `Computer's Score: ${++computerScore}`;
    }

    displayResult(result.slice(1));

    const roundDiv = document.querySelector('#round');
    roundDiv.textContent = `Round ${++rounds}`;
}

// New Code
let rounds = 1,
    playerScore = 0,
    computerScore = 0;

const rockBtn = document.querySelector('#rock');
rockBtn.addEventListener('click', () => game('Rock'));

const paperBtn = document.querySelector('#paper');
paperBtn.addEventListener('click', () => game('Paper'));

const scissorsBtn = document.querySelector('#scissors');
scissorsBtn.addEventListener('click', () => game('Scissors'));

function displayResult(result) {
    const resultDiv = document.querySelector('#result');
    resultDiv.textContent = result;
}