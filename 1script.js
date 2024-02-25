
const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let userChoice;
let computerChoice;

possibleChoices.forEach(button => {
    button.addEventListener('click', (e) => {
        userChoice = e.target.id;
        userChoiceDisplay.innerHTML = userChoice;
        generateComputerChoice();
        determineWinner();
    });
});

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) {
        computerChoice = "Rock";
    } else if (randomNumber === 2) {
        computerChoice = "Scissor";
    } else {
        computerChoice = "Paper";
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}

function determineWinner() {
    if (userChoice === computerChoice) {
        resultDisplay.innerHTML = "It's a tie!";
    } else if (
        (userChoice === "rock" && computerChoice === "scissor") ||
        (userChoice === "scissor" && computerChoice === "paper") ||
        (userChoice === "paper" && computerChoice === "rock")
    ) {
        resultDisplay.innerHTML = "Congrats! You win!";
    } else {
        resultDisplay.innerHTML = "You lost. Better luck next time!";
    }
}