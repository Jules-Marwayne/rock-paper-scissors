function computerPlay() {
    let array = ["Rock", "Paper", "Scissors"];
    return array[Math.floor(Math.random() * 3)];
}

let message;

function rockPaperScissors(playerSelection, computerSelection) {
    if (playerSelection && computerSelection) {
        let player = playerSelection.toLowerCase();
        let computer = computerSelection.toLowerCase();
        if (player === computer) {
            return "Draw";
        } else if (player === "rock") {
            if (computer === "scissors") {
                message = "You Win! Rock beats Scissors";
            } else {
                message = "You Lose! Paper beats Rock";
            }
        } else if (player === "paper") {
            if (computer === "rock") {
                message = "You Win! Paper beats Rock";
            } else {
                message = "You Lose! Scissors beats Paper";
            }
        } else if (player === "scissors") {
            if (computer === "paper") {
                message = "You Win! Scissors beats Paper";
            } else {
                message = "You Lose! Rock beats Scissors";
            }
        } else {
            rockPaperScissors(prompt("Enter a valid option:"), computerPlay());
        }
        return message;
    }
}

function game() {
    for (let i = 1; i <= 5; i++) {
        console.log(rockPaperScissors(prompt("Rock, Paper, or Scissors?"), computerPlay()));
    }
    return;
}

game();