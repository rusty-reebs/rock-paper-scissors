let computerCounter = 0; // keeps track of wins and losses
let playerCounter = 0;


// Function for random computer return of "Rock", "Paper", or "Scissors"

function computerPlay () {
    let comRandom = Math.random();
    if (comRandom <= 0.33) {comRandom = "Rock";}
    else if (comRandom <= 0.67) {comRandom = "Paper";}
    else {comRandom = "Scissors";}
    return comRandom;
}


let resultsDiv = document.getElementById("results");
let scoreDiv = document.getElementById("score");
let winner = document.createElement('h2')


let yourScore = document.getElementById("yourScore");
let computerScore = document.getElementById("computerScore");
let showYourScore = document.createElement('p');
    showYourScore.textContent = playerCounter;
    yourScore.appendChild(showYourScore);
let showComputerScore = document.createElement('p');
    showComputerScore.textContent = computerCounter;
    computerScore.appendChild(showComputerScore);

// Event listeners

let buttonRock = document.getElementById("rock");

buttonRock.addEventListener("click", () => {
        playerSelectionLower = "rock";
        console.log ("You clicked rock");
        let choiceRock = document.createElement('div');
        choiceRock.textContent = playRound (playerSelectionLower, computerPlay());
        resultsDiv.appendChild(choiceRock);
        showYourScore.textContent = playerCounter;
        showComputerScore.textContent = computerCounter;
        /* This shows the winner but will not end the game 
        if (playerCounter == 5) {
                winner.textContent = ("Game Over -- YOU WON 5 GAMES!");
                scoreDiv.appendChild(winner);
        else if (computerCounter == 5) {
                winner.textContent = ("Game Over -- COMPUTER WON 5 GAMES!");
                scoreDiv.appendChild(winner);
        } */
})

let buttonPaper = document.getElementById("paper");

buttonPaper.addEventListener("click", () => {
        playerSelectionLower = "paper";
        console.log ("You clicked paper");
        let choicePaper = document.createElement('div');
        choicePaper.textContent = playRound (playerSelectionLower, computerPlay());
        resultsDiv.appendChild(choicePaper);
        showYourScore.textContent = playerCounter;
        showComputerScore.textContent = computerCounter;
})

let buttonScissors = document.getElementById("scissors");

buttonScissors.addEventListener("click", () => {
        playerSelectionLower = "scissors";
        console.log ("You clicked scissors");
        let choiceScissors = document.createElement('div');
        choiceScissors.textContent = playRound (playerSelectionLower, computerPlay());
        resultsDiv.appendChild(choiceScissors);
        showYourScore.textContent = playerCounter;
        showComputerScore.textContent = computerCounter;
})


// Function to play a single round of Rock, Paper, Scissors

function playRound (playerSelectionLower, computerSelection) { 
    let result;
    if (playerSelectionLower == "rock" && computerSelection == "Rock") 
            {result = 'Rock ties Rock!';}
    else if (playerSelectionLower == "rock" && computerSelection == "Paper") 
            {result = 'You Lose -- Paper beats Rock!';
                computerCounter++;}
    else if (playerSelectionLower == "rock" && computerSelection == "Scissors") 
            {result = 'You Win! Rock beats Scissors!';
                playerCounter++;}
    else if (playerSelectionLower == "scissors" && computerSelection == "Scissors") 
            {result = 'Scissors ties Scissors!';}
    else if (playerSelectionLower == "scissors" && computerSelection == "Paper") 
            {result = 'You Win! Scissors beats Paper!';
                playerCounter++;}
    else if (playerSelectionLower == "scissors" && computerSelection == "Rock") 
            {result = 'You Lose -- Rock beats Scissors!';
                computerCounter++;}
    else if (playerSelectionLower == "paper" && computerSelection == "Paper") 
            {result = 'Paper ties Paper!';}
    else if (playerSelectionLower == "paper" && computerSelection == "Rock") 
            {result = 'You win! Paper beats Rock!';
                playerCounter++;}
    else if (playerSelectionLower == "paper" && computerSelection == "Scissors") 
            {result = 'You Lose -- Scissors beats Paper!';
                computerCounter++;}
    return result;
    
    }


