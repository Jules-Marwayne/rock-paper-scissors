function computerPlay() {
    let array = ["Rock", "Paper", "Scissors"];
    return array[Math.floor(Math.random() * 3)];
}

let playerScore = 0;
let computerScore = 0;
let btn = document.querySelector("#button");

btn.addEventListener("click", function(e) {
    let playerSelection = e.target.id;
    let computer = computerPlay();

    showScores();
    document.querySelector("#p").textContent = playerSelection;
    document.querySelector("#c").textContent = computer;
    document.querySelector("#winner").textContent = "";
    if (playerSelection === computer) {
        document.querySelector("#result").textContent = "Draw";
    } else if (playerSelection === "Rock") {
        document.querySelector("#p").textContent = "Rock";
        if (computer === "Scissors") {
            document.querySelector("#result").textContent = "You Scored! Rock beats Scissors";
            playerScore++;
            document.querySelector("#playerScore").textContent = playerScore;
        } else {
            document.querySelector("#result").textContent = "Paper beats Rock!";
            computerScore++;
            document.querySelector("#computerScore").textContent = computerScore;
        }        
    } else if (playerSelection === "Paper") {
        document.querySelector("#p").textContent = "Paper"
        if (computer === "Rock") {
            document.querySelector("#result").textContent = "You Scored! Paper beats Rock";
            playerScore++;
            document.querySelector("#playerScore").textContent = playerScore;
        } else {
            document.querySelector("#result").textContent = "Scissors beats Paper!";
            computerScore++;
            document.querySelector("#computerScore").textContent = computerScore;
        }
    } else {
        document.querySelector("#p").textContent = "Scissors";
        if (computer === "Paper") {
            document.querySelector("#result").textContent = "You Scored! Scissors beats Paper";
            playerScore++;
            document.querySelector("#playerScore").textContent = playerScore;
        } else {
            document.querySelector("#result").textContent = "Rock beats Scissors!";
            computerScore++;
            document.querySelector("#computerScore").textContent = computerScore;
        }
    }
    if (playerScore === 5 && playerScore > computerScore) {
        document.querySelector("#winner").textContent = "You won the game! Congratulations!";
        resetScores();
    } else if (computerScore === 5 && computerScore > playerScore) {
        document.querySelector("#winner").textContent = "You lost! Better luck next time";
        resetScores();
    }
});

function resetScores() {
    playerScore = 0;
    computerScore = 0;
    return;
}

function showScores() {
    document.querySelector("#playerScore").textContent = playerScore;
    document.querySelector("#computerScore").textContent = computerScore;
    return;
}

// function rockPaperScissors(playerSelection, computerSelection) {
//     if (playerSelection && computerSelection) {
//         if (playerSelection === computer) {
//             return "Draw";
//         } else if (playerSelection === "rock") {
//             if (computer === "scissors") {
//                 message = "You Win! Rock beats Scissors";
//             } else {
//                 message = "You Lose! Paper beats Rock";
//             }
//         } else if (playerSelection === "paper") {
//             if (computer === "rock") {
//                 message = "You Win! Paper beats Rock";
//             } else {
//                 message = "You Lose! Scissors beats Paper";
//             }
//         } else if (playerSelection === "scissors") {
//             if (computer === "paper") {
//                 message = "You Win! Scissors beats Paper";
//             } else {
//                 message = "You Lose! Rock beats Scissors";
//             }
//         } else {
//             rockPaperScissors(prompt("Enter a valid option:"), computerPlay());
//         }
//         return message;
//     }
// }