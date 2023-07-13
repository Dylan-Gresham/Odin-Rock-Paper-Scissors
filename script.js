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
 * Example: 'You Lose! Paper beats Rock' || 'You Win! Scissors beats Paper' */

/* game function
 * No parameters
 * Returns the winner and loser as a string
 * Example: 'You Lose, Computer Wins!' || 'You Win, Computer Loses!' */