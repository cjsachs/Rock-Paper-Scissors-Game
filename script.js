
function computerPlay() { // will generate a random number between 1-3. 1 = 'Rock', 2 = 'Paper', 3 = 'Scissors'
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

function playGame(playerSelection, computerSelection) {
    
}