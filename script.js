let playerScore = 0;
let computerScore = 0;

//function computerPlay() will generate a random number between 1-3. 1 = 'Rock', 2 = 'Paper', 3 = 'Scissors'
function computerPlay() { 
    let picker = Math.floor(Math.random()*3) + 1;
    if (picker == 1) {
        picker = 'Rock';
        return picker;
    } else if (picker == 2) {
        picker = 'Paper';
        return picker;
    } else {
    picker = 'Scissors';
    return picker;
    }
};

// function playGame() will compare the players choice with the CPU's choice to decide who is the winner and loser!
function playGame() {
    let playerSelection = prompt('Choose wisely... Rock, Paper, or Scissors?');
    const computerSelection = computerPlay();
    playerSelection = playerSelection.toLowerCase();
    // Code IF player chooses ROCK as their choice
    if (playerSelection == 'rock' && computerSelection == 'Rock') {
        console.log(`Tie Game! You chose ${playerSelection.replace('r', 'R')} And the CPU chose ${computerSelection}!`);
        console.log(`The current score: You: ${playerScore} CPU: ${computerScore}`);
    } else if (playerSelection == 'rock' && computerSelection =='Paper') {
        console.log(`You Lose! You chose ${playerSelection.replace('r', 'R')} And the CPU chose ${computerSelection}!`);
        computerScore += 1;
        console.log(`The current score: You: ${playerScore} CPU: ${computerScore}`);
    } else if (playerSelection == 'rock' && computerSelection =='Scissors') {
        console.log(`You Win! You chose ${playerSelection.replace('r', 'R')} And the CPU chose ${computerSelection}!`);
        playerScore += 1;
        console.log(`The current score: You: ${playerScore} CPU: ${computerScore}`);
    }

    // Code IF player choose PAPER as their choice
    else if (playerSelection == 'paper' && computerSelection == 'Paper') {
        console.log(`Tie Game! You chose ${playerSelection.replace('p', 'P')} And the CPU chose ${computerSelection}!`);
        console.log(`The current score: You: ${playerScore} CPU: ${computerScore}`);
    } else if (playerSelection == 'paper' && computerSelection =='Scissors') {
        console.log(`You Lose! You chose ${playerSelection.replace('p', 'P')} And the CPU chose ${computerSelection}!`)
        computerScore += 1;
        console.log(`The current score: You: ${playerScore} CPU: ${computerScore}`);
    } else if (playerSelection == 'paper' && computerSelection =='Rock') {
        console.log(`You Win! You chose ${playerSelection.replace('p', 'P')} And the CPU chose ${computerSelection}!`)
        playerScore += 1;
        console.log(`The current score: You: ${playerScore} CPU: ${computerScore}`);
    }

    // Code IF player choose SCISSORS as their choice
    else if (playerSelection == 'scissors' && computerSelection == 'Scissors') {
        console.log(`Tie Game! You chose ${playerSelection.replace('s', 'S')} And the CPU chose ${computerSelection}!`);
        console.log(`The current score: You: ${playerScore} CPU: ${computerScore}`);
    } else if (playerSelection == 'scissors' && computerSelection =='Rock') {
        console.log(`You Lose! You chose ${playerSelection.replace('s', 'S')} And the CPU chose ${computerSelection}!`)
        computerScore += 1;
        console.log(`The current score: You: ${playerScore} CPU: ${computerScore}`);
    } else if (playerSelection == 'scissors' && computerSelection =='Paper') {
        console.log(`You Win! You chose ${playerSelection.replace('s', 'S')} And the CPU chose ${computerSelection}!`)
        playerScore += 1;
        console.log(`The current score: You: ${playerScore} CPU: ${computerScore}`);
    } else {
        message = 'Oops something went wrong with our program! Try Again!'
        return message;
    }
};

// function game() creates a 5 round game and keeps score
function game() {
    while (playerScore < 5 && computerScore < 5) {
        playGame();
        if (computerScore == 5) {
        console.log('The CPU WINS!')
        } else if (playerScore == 5) {
        console.log('You WIN!')
        }
    };
};

game();
