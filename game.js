let rounds = 1,
    playerScore = 0,
    computerScore = 0;

const rockBtn = document.querySelector('#rock');
rockBtn.addEventListener('click', chooseRock);

const paperBtn = document.querySelector('#paper');
paperBtn.addEventListener('click', choosePaper);

const scissorsBtn = document.querySelector('#scissors');
scissorsBtn.addEventListener('click', chooseScissors);

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

// Plays a round of RPS and returns the result
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
                    return `2You lost round ${rounds}! ${computerSelection} beats ${playerSelection}.`;
                    break;
                case "Scissors":
                    return `1You won round ${rounds}! ${playerSelection} beats ${computerSelection}.`;
                    break;
            }
            break;

        case "Paper":
            switch (computerSelection) {
                case "Rock":
                    return `1You won round ${rounds}! ${playerSelection} beats ${computerSelection}.`;
                    break;
                case "Paper":
                    return " Tie!";
                    break;
                case "Scissors":
                    return `2You lost round ${rounds}! ${computerSelection} beats ${playerSelection}.`;
                    break;
            }
            break;

        case "Scissors":
            switch (computerSelection) {
                case "Rock":
                    return `2You lost round ${rounds}! ${computerSelection} beats ${playerSelection}.`;
                    break;
                case "Paper":
                    return `1You won round ${rounds}! ${playerSelection} beats ${computerSelection}.`;
                    break;
                case "Scissors":
                    return " Tie!";
                    break;
            }
            break;
    }
}

// Keeps track of the game
function game(playerSelection) {
    let result = playRound(playerSelection, getComputerChoice());

    // 1 means player won the round, 2 means computer won the round
    if (result.charAt(0) === "1") {
        const playerScoreDiv = document.querySelector('#player');
        playerScoreDiv.textContent = `Player's Score: ${++playerScore}`;
    } else if (result.charAt(0) === "2") {
        const computerScoreDiv = document.querySelector('#computer');
        computerScoreDiv.textContent = `Computer's Score: ${++computerScore}`;
    }

    displayResult(result.slice(1));

    if (playerScore === 5) {
        displayResult('You won the game! Wanna play again? Reload the page.');
        endGame();
        return;
    } else if (computerScore === 5) {
        displayResult('You lost the Game! Wanna play again? Reload the page.');
        endGame();
        return;
    }

    const roundDiv = document.querySelector('#round');
    roundDiv.textContent = `Round ${++rounds}`;
}

function chooseRock() {
    game('Rock');
}

function choosePaper() {
    game('Paper');
}

function chooseScissors() {
    game('Scissors');
}

function displayResult(result) {
    const resultDiv = document.querySelector('#result');
    resultDiv.textContent = result;
}

function endGame() {
    rockBtn.removeEventListener('click', chooseRock);
    paperBtn.removeEventListener('click', choosePaper);
    scissorsBtn.removeEventListener('click', chooseScissors);
}