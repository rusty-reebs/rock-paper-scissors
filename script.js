// Random computer return of "Rock", "Paper", or "Scissors"

function computerPlay () {
    let comRandom = Math.random();
    if (comRandom <= 0.33) {comRandom = "Rock";}
    else if (comRandom <= 0.67) {comRandom = "Paper";}
    else {comRandom = "Scissors"};
    return comRandom;

// console.log (comRandom);
}


// Function to play a single round of Rock, Paper, Scissors

function playRound (playerSelection, computerSelection) {
    let result;
    if (playerSelectionLower == "rock" && computerSelection == "Rock") {result = 'Rock ties Rock rock the world!';}
    else if (playerSelectionLower == "rock" && computerSelection == "Paper") {result = 'You Lose -- Paper beats Rock too bad!';}
    else if (playerSelectionLower == "rock" && computerSelection == "Scissors") {result = 'You Win! Rock beats Scissors oh no!';}
    else if (playerSelectionLower == "scissors" && computerSelection == "Scissors") {console.log('Scissors ties Scissors!');}
    else if (playerSelectionLower == "scissors" && computerSelection == "Paper") {console.log('You Win! Scissors beats Paper!');}
    else if (playerSelectionLower == "scissors" && computerSelection == "Rock") {console.log('You Lose -- Rock beats Scissors!');}
    else if (playerSelectionLower == "paper" && computerSelection == "Paper") {console.log('Paper ties Paper!');}
    else if (playerSelectionLower == "paper" && computerSelection == "Rock") {console.log('You win! Paper beats Rock!');}
    else if (playerSelectionLower == "paper" && computerSelection == "Scissors") {console.log('You Lose -- Scissors beats Paper!');}
    return result;
}


const playerSelection = prompt("Choose Rock, Paper or Scissors");
playerSelectionLower = playerSelection.toLowerCase();
const computerSelection = computerPlay();



// console.log (playRound(playerSelection, computerSelection));
