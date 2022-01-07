let playerScore = 0;
let computerScore = 0;

const playerScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('cpu-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result p');
const rock_div = document.getElementById('Rock');
const paper_div = document.getElementById('Paper');
const scissors_div = document.getElementById('Scissors');

function computerPlay() {
    const choices = ['Rock', 'Paper', 'Scissors']
    let picker = Math.floor(Math.random()*3);
    return choices[picker];
};

function win(userChoice, cpuChoice) {
    const userChoice_div = document.getElementById(userChoice) 
    playerScore++;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${userChoice.toUpperCase()}(you) beats ${cpuChoice.toUpperCase()}(cpu). You Win!`
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 400)
}
function lose(userChoice, cpuChoice) {
    const userChoice_div = document.getElementById(userChoice) 
    computerScore++;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${userChoice.toUpperCase()}(you) loses to ${cpuChoice.toUpperCase()}(cpu). You Lose!`
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 400)
}
function tie(userChoice, cpuChoice) {
    const userChoice_div = document.getElementById(userChoice)
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `Both of you chose ${userChoice.toUpperCase()}. Tie Game!`
    userChoice_div.classList.add('gray-glow');
    setTimeout(() => userChoice_div.classList.remove('gray-glow'), 400)
}

function game(userChoice) {
    const cpuChoice = computerPlay();
    switch (userChoice + cpuChoice) {
        case 'RockScissors':
        case 'PaperRock':
        case 'ScissorsPaper':
            win(userChoice, cpuChoice);
            break;
        case 'RockPaper':
        case 'PaperScissors':
        case 'ScissorsRock':
            lose(userChoice, cpuChoice);
            break;
        case 'RockRock':
        case 'PaperPaper':
        case 'ScissorsScissors':
            tie(userChoice, cpuChoice);
            break;
    }
}

function playGame() {
    rock_div.addEventListener('click', () => game('Rock'));
    
    paper_div.addEventListener('click', () => game('Paper'));

    scissors_div.addEventListener('click', () => game('Scissors'));
}

playGame();