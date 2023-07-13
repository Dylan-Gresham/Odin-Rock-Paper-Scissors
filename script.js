/* getComputerChoice function
 * No parameters
 * Return either 'Rock', 'Paper', or 'Scissors' randomly */
function getComputerChoice() {
    // 0 === 'Rock', 1 === 'Paper', 2 === 'Scissors'
    let randNum = Math.floor(Math.random() * 3);

    if(randNum === 0) {
        return 'Rock'
    } else if(randNum === 1) {
        return 'Paper'
    } else {
        return 'Scissors'
    }
}

/* playRound function
 * Two parameters: playerSelection, computerSelection
 * Returns a string that declares the winner.
 * Example: 'You Lose! Rock loses to Paper' || 'You Win! Scissors beats Paper' */
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if(playerSelection === computerSelection) {
        return 'It\'s a tie!'
    } else if(playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You Win! Rock beats Scissors';
    } else if(playerSelection === 'rock' && computerSelection === 'paper') {
        return 'You Lose! Rock loses to Paper';
    } else if(playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You Win! Paper beats Rock';
    } else if(playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'You Lose! Paper loses to Scissors';
    } else if(playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You Win! Scissors beats Paper';
    } else if(playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'You Lose! Scissors loses to Rock';
    } else {
        return `Error! Invalid parameters:\n\tplayerSelection = ${playerSelection}\n\tcomputerSelection = ${computerSelection}`
    }
}

/* game function
 * No parameters
 * Returns the winner and loser as a string
 * Example: 'You Lose, Computer Wins!' || 'You Win, Computer Loses!' */