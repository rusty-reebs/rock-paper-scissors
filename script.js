// Random computer return of "Rock", "Paper", or "Scissors"

function computerPlay () {
    let comRandom = Math.random();
    if (comRandom <= 0.33) {comRandom = "Rock";}
    else if (comRandom <= 0.67) {comRandom = "Paper";}
    else {comRandom = "Scissors";}
    return comRandom;
}

// Function for player selection

function makeChoice () {
        let choice = prompt("Choose Rock, Paper, or Scissors");
        choiceLower = choice.toLowerCase();
        return choiceLower;
}

// Function to play a 5-round game

function game () {
    // Round 1
    computerSelection = computerPlay ();
    yourChoice = makeChoice ();
    console.log ("Round 1");
    console.log ("You chose " + yourChoice);
    console.log ("Computer chose " + computerSelection);
    console.log (playRound(yourChoice, computerSelection));
    // Round 2
    computerSelection = computerPlay ();
    yourChoice = makeChoice ();
    console.log ("Round 2");
    console.log ("You chose " + yourChoice);
    console.log ("Computer chose " + computerSelection);
    console.log (playRound(yourChoice, computerSelection));
    // Round 3
    computerSelection = computerPlay ();
    yourChoice = makeChoice ();
    console.log ("Round 3");
    console.log ("You chose " + yourChoice);
    console.log ("Computer chose " + computerSelection);
    console.log (playRound(yourChoice, computerSelection));
    // Round 4
    computerSelection = computerPlay ();
    yourChoice = makeChoice ();
    console.log ("Round 4");
    console.log ("You chose " + yourChoice);
    console.log ("Computer chose "+ computerSelection);
    console.log (playRound(yourChoice, computerSelection));
    // Round 5
    computerSelection = computerPlay ();
    yourChoice = makeChoice ();
    console.log ("Round 5");
    console.log ("You chose " + yourChoice);
    console.log ("Computer chose " + computerSelection);
    console.log (playRound(yourChoice, computerSelection));
}


// Function to play a single round of Rock, Paper, Scissors

function playRound (playerSelectionLower, computerSelection) { 
    let result;
    if (playerSelectionLower == "rock" && computerSelection == "Rock") 
            {result = 'Rock ties Rock!';}
    else if (playerSelectionLower == "rock" && computerSelection == "Paper") 
            {result = 'You Lose -- Paper beats Rock!';}
    else if (playerSelectionLower == "rock" && computerSelection == "Scissors") 
            {result = 'You Win! Rock beats Scissors!';}
    else if (playerSelectionLower == "scissors" && computerSelection == "Scissors") 
            {result = 'Scissors ties Scissors!';}
    else if (playerSelectionLower == "scissors" && computerSelection == "Paper") 
            {result = 'You Win! Scissors beats Paper!';}
    else if (playerSelectionLower == "scissors" && computerSelection == "Rock") 
            {result = 'You Lose -- Rock beats Scissors!';}
    else if (playerSelectionLower == "paper" && computerSelection == "Paper") 
            {result = 'Paper ties Paper!';}
    else if (playerSelectionLower == "paper" && computerSelection == "Rock") 
            {result = 'You win! Paper beats Rock!';}
    else if (playerSelectionLower == "paper" && computerSelection == "Scissors") 
            {result = 'You Lose -- Scissors beats Paper!';}
    return result;

    }


game ();
