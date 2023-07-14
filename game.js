game();

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

function game() {
    let rounds = 0,
        playerScore = 0,
        computerScore = 0;
    while (rounds < 5) {
        console.log(`Round ${rounds + 1}`);
        let result = playRound(getPlayerChoice(), getComputerChoice());

        if (result === "Canceled") {
            console.log("You canceled the game");
            return;
        } else if (result === "Wrong Choice") {
            console.log("You entered a wrong choice\nCanceling the game");
            return;
        }

        if (result.charAt(0) === "1") {
            playerScore++;
        } else if (result.charAt(0) === "2") {
            computerScore++;
        }
        console.log(result.slice(1));
        rounds++;
    }

    console.log(`Game Results\nPlayer's Score: ${playerScore}\nComputer's Score: ${computerScore}`);
    if (playerScore > computerScore) {
        console.log("You won the game!");
    } else if (playerScore < computerScore) {
        console.log("You lost the game!");
    } else {
        console.log("The game ended in a Tie!");
    }
}