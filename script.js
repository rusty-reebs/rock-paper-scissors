// Random computer return of "Rock", "Paper", or "Scissors"

function computerPlay () {
    let comRandom = Math.random();
    if (comRandom <= 0.33) {comRandom = "Rock";}
    else if (comRandom <= 0.67) {comRandom = "Paper";}
    else {comRandom = "Scissors";}
    return comRandom;

}


// Function to play a 5-round game

function game () {
    playRound (playerSelectionLower, computerSelection);
    console.log ("Round 1");
    console.log (playRound(playerSelectionLower, computerSelection));
    playRound (playerSelectionLower, computerSelection);
    console.log ("Round 2");
    console.log (playRound(playerSelectionLower, computerSelection));
    playRound (playerSelectionLower, computerSelection);
    console.log ("Round 3");
    console.log (playRound(playerSelectionLower, computerSelection));
    playRound (playerSelectionLower, computerSelection);
    console.log ("Round 4");
    console.log (playRound(playerSelectionLower, computerSelection));
    playRound (playerSelectionLower, computerSelection);
    console.log ("Round 5");
    console.log (playRound(playerSelectionLower, computerSelection));


}


// Function to play a single round of Rock, Paper, Scissors

function playRound (playerSelectionLower, computerSelection) {
    

    let result;
    if (playerSelectionLower == "rock" && computerSelection == "Rock") {result = 'Rock ties Rock!';}
    else if (playerSelectionLower == "rock" && computerSelection == "Paper") {result = 'You Lose -- Paper beats Rock!';}
    else if (playerSelectionLower == "rock" && computerSelection == "Scissors") {result = 'You Win! Rock beats Scissors!';}
    else if (playerSelectionLower == "scissors" && computerSelection == "Scissors") {result = 'Scissors ties Scissors!';}
    else if (playerSelectionLower == "scissors" && computerSelection == "Paper") {result = 'You Win! Scissors beats Paper!';}
    else if (playerSelectionLower == "scissors" && computerSelection == "Rock") {result = 'You Lose -- Rock beats Scissors!';}
    else if (playerSelectionLower == "paper" && computerSelection == "Paper") {result = 'Paper ties Paper!';}
    else if (playerSelectionLower == "paper" && computerSelection == "Rock") {result = 'You win! Paper beats Rock!';}
    else if (playerSelectionLower == "paper" && computerSelection == "Scissors") {result = 'You Lose -- Scissors beats Paper!';}
    return result;

    }



let playerSelection = prompt("Choose Rock, Paper or Scissors");
playerSelectionLower = playerSelection.toLowerCase();
computerSelection = computerPlay();


console.log (game());

// console.log (playRound(playerSelectionLower, computerSelection));
