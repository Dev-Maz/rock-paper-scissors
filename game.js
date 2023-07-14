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

function getPlayerChoice() {
    let choice = prompt("Type: R for Rock, P for Paper, S for Scissors");
    if (choice === null) {
        return "Canceled";
    } else if (choice.toLowerCase() === "r") {
        return "Rock";
    } else if (choice.toLowerCase() === "p") {
        return "Paper";
    } else if (choice.toLowerCase() === "s") {
        return "Scissors";
    } else {
        return "Wrong Choice";
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Canceled") {
        return "Canceled";
    } else if (playerSelection === "Wrong Choice") {
        return "Wrong Choice";
    }

    console.log(`Player's choice: ${playerSelection}`);
    console.log(`Computer's choice: ${computerSelection}`);

    switch (playerSelection) {
        case "Rock":
            switch (computerSelection) {
                case "Rock":
                    return "Tie!";
                    break;
                case "Paper":
                    return `You lose! ${computerSelection} beats ${playerSelection}`;
                    break;
                case "Scissors":
                    return `You win! ${playerSelection} beats ${computerSelection}`;
                    break;
            }
            break;

        case "Paper":
            switch (computerSelection) {
                case "Rock":
                    return `You win! ${playerSelection} beats ${computerSelection}`;
                    break;
                case "Paper":
                    return "Tie!";
                    break;
                case "Scissors":
                    return `You lose! ${computerSelection} beats ${playerSelection}`;
                    break;
            }
            break;

        case "Scissors":
            switch (computerSelection) {
                case "Rock":
                    return `You lose! ${computerSelection} beats ${playerSelection}`;
                    break;
                case "Paper":
                    return `You win! ${playerSelection} beats ${computerSelection}`;
                    break;
                case "Scissors":
                    return "Tie!";
                    break;
            }
            break;
    }
}