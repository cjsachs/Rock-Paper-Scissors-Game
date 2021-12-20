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
function playGame(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    // Code IF player chooses ROCK as their choice
    if (playerSelection == 'rock' && computerSelection == 'Rock') {
        message = 'Tie Game!';
        return message;
    } else if (playerSelection == 'rock' && computerSelection =='Paper') {
        message = 'You Lose!';
        return message;
    } else if (playerSelection == 'rock' && computerSelection =='Scissors') {
        message = 'You Win!';
        return message;
    }

    // Code IF player choose PAPER as their choice
    if (playerSelection == 'paper' && computerSelection == 'Paper') {
        message = 'Tie Game!';
        console.log(`You chose ${playerSelection.replace('p', 'P')} And the CPU chose ${computerSelection}!`)
        return message;
    } else if (playerSelection == 'paper' && computerSelection =='Scissors') {
        console.log(`You chose ${playerSelection.replace('p', 'P')} And the CPU chose ${computerSelection}!`)
        message = 'You Lose!';
        return message;
    } else if (playerSelection == 'paper' && computerSelection =='Rock') {
        console.log(`You chose ${playerSelection.replace('p', 'P')} And the CPU chose ${computerSelection}!`)
        message = 'You Win!';
        return message;
    }

    // Code IF player choose SCISSORS as their choice
    if (playerSelection == 'scissors' && computerSelection == 'Scissors') {
        message = 'Tie Game!';
        console.log(`You chose ${playerSelection.replace('s', 'S')} And the CPU chose ${computerSelection}!`)
        return message;
    } else if (playerSelection == 'scissors' && computerSelection =='Rock') {
        console.log(`You chose ${playerSelection.replace('s', 'S')} And the CPU chose ${computerSelection}!`)
        message = 'You Lose!';
        return message;
    } else if (playerSelection == 'scissors' && computerSelection =='Paper') {
        console.log(`You chose ${playerSelection.replace('s', 'S')} And the CPU chose ${computerSelection}!`)
        message = 'You Win!';
        return message;
    } else {
        message = 'Oops something went wrong with our program! Try Again!'
        return message;
    }
};

// function game() creates a 5 round game and keeps score
function game() {
    let playerScore = 0;
    let computerScore = 0;
    while (playerScore < 5 || computerScore < 5) {
        playGame(playerSelection, computerSelection);
        if (playGame(playerSelection, computerSelection) == 'You Lose!') {
            ++computerScore;
            return `Your Score: ${playerScore} | CPU Score: ${computerScore}`;
        } else if (playGame(playerSelection, computerSelection) == 'You Win!') {
            ++playerScore;
            return `Your Score: ${playerScore} | CPU Score: ${computerScore}`;
        } else if (playGame(playerSelection, computerSelection) == 'Tie Game!') {
            let message = 'Its a tie! Try again!';
            return `${message} The Score remains ${playerScore} | ${computerScore}`;
        }
    }
};
const playerSelection = prompt('Choose wisely... Rock, Paper, or Scissors?');
const computerSelection = computerPlay();

console.log(playGame(playerSelection, computerSelection));
console.log(game());
