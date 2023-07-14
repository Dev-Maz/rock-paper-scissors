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