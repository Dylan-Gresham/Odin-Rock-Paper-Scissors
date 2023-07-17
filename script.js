const roundButton = document.querySelector('.new-round');
const endButton = document.querySelector('.new-round.end');
const resetButton = document.querySelector('.new-round.reset');
const score = document.querySelector('.score');
const instructions = document.querySelector('p');
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

let totalRounds = 0;
let currentScore = 0;
let playerChoice;
let computerChoice;
let midRound = false;
let midGame = false;
let wins = 0;
let losses = 0;
let ties = 0;

roundButton.addEventListener('click', e => {
    if(!midGame) {
        midGame = true;
        score.textContent = '0';
        currentScore = 0;
        totalRounds = 0;
    }

    midRound = true;
    if(totalRounds === 0) {
        roundButton.textContent = 'New Round';
    }

    instructions.textContent = 'Click Your Choice For This Round';
    instructions.style.color = '#FFFFFF';
    computerChoice = getComputerChoice();

    e.stopPropagation();
});

endButton.addEventListener('click', e => {
    if(!midGame) {
        return;
    } else {
        midRound = false;
        midGame = false;

        let decision;
        if(wins > losses) {
            decision = 'You Won!';
        } else if(wins < losses) {
            decision = 'You Lost!';
        } else {
            decision = 'It\'s a Tie!';
        }
        roundButton.textContent = 'New Game';
    
        instructions.textContent = `${decision} Wins: ${wins} Losses: ${losses} Ties: ${ties}`;
        instructions.style.color = '#FFFFFF';
    }

    e.stopPropagation();
});

resetButton.addEventListener('click', e => {
    midRound = false;
    midGame = false;
    score.textContent = '0';
    currentScore = 0;
    roundButton.textContent = 'Start Game';
    totalRounds = 0;
    instructions.style.color = '#121212';
    instructions.textContent = 'Click Your Choice For This Round';

    e.stopPropagation();
});

rock.addEventListener('click', e => {
    if(!midRound) {
        return;
    } else {
        midRound = false;
        playerChoice = 'Rock';
        let result = playRound(playerChoice, computerChoice);
        instructions.textContent = result;

        if(result.charAt(4) === 'L') {
            score.textContent = +score.textContent - 1;
            losses++;
        } else if(result.charAt(4) === 'W') {
            score.textContent = +score.textContent + 1;
            wins++;
        } else {
            ties++;
        }
    }

    e.stopPropagation();
});

paper.addEventListener('click', e => {
    if(!midRound) {
        return;
    } else {
        midRound = false;
        playerChoice = 'Paper';
        let result = playRound(playerChoice, computerChoice);
        instructions.textContent = result;

        if(result.charAt(4) === 'L') {
            score.textContent = +score.textContent - 1;
            losses++;
        } else if(result.charAt(4) === 'W') {
            score.textContent = +score.textContent + 1;
            wins++;
        } else {
            ties++;
        }
    }

    e.stopPropagation();
});

scissors.addEventListener('click', e => {
    if(!midRound) {
        return;
    } else {
        midRound = false;
        playerChoice = 'Scissors';
        let result = playRound(playerChoice, computerChoice);
        instructions.textContent = result;

        if(result.charAt(4) === 'L') {
            score.textContent = +score.textContent - 1;
            losses++;
        } else if(result.charAt(4) === 'W') {
            score.textContent = +score.textContent + 1;
            wins++;
        } else {
            ties++;
        }
    }

    e.stopPropagation();
});

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
    // Convert to lower case so that user input can be any combination of capitals and lower case letters
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
    } else { // "Default" case in case the player enters something invalid
        return `Error! Invalid parameters:\n\tplayerSelection = ${playerSelection}\n\tcomputerSelection = ${computerSelection}`
    }
}

/* game function
 * No parameters
 * Returns the winner and loser as a string
 * Example: 'You Lose, Computer Wins!' || 'You Win, Computer Loses!' */
function game() {
    // Declare & Instantiate variables for round stats
    let wins = 0;
    let losses = 0;
    let ties = 0;

    // Play all five rounds
    for(let i = 1; i <= 5; i++) {
        let userChoice = prompt(`Enter your choice for round ${i} of 5:`);
        let gameDecision = playRound(userChoice, getComputerChoice());

        if(gameDecision.charAt(0) === 'I') {
            ties++;
        } else if(gameDecision.charAt(4) === 'L') {
            losses++;
        } else if(gameDecision.charAt(4) === 'W') {
            wins++;
        } else {
            return gameDecision;
        }
    }

    if(wins > losses) {
        return `Game Over, you Win!\nWins: ${wins}\nLosses: ${losses}\nTies: ${ties}`;
    } else if(losses > wins) {
        return `Game Over, you Lose!\nWins: ${wins}\nLosses: ${losses}\nTies: ${ties}`;
    } else {
        return `Game Over, it\'s a Tie!\nWins: ${wins}\nLosses: ${losses}\nTies: ${ties}`;
    }
}
