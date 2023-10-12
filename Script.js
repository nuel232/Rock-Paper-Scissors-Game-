function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissors'];
    const randomChoice = Math.floor(Math.random() * choice.length);
    return choice[randomChoice];
}

function winner(ComputerChoice, playerChoice) {
    if (ComputerChoice === playerChoice) {
        return "It's a Tie";
    } else if (
        (ComputerChoice === 'rock' && playerChoice === 'paper') ||
        (ComputerChoice === 'scissors' && playerChoice === 'rock') ||
        (ComputerChoice === 'paper' && playerChoice === 'scissors')) {
        return 'you win';
    } else {
        return 'you lose';
    }
}

function playGame(player) {
    let computerChoice = getComputerChoice();
    console.log(`You chose: ${player}`);
    console.log(`Computer chose: ${computerChoice}`);

    // Display player's and computer's choices and result
    document.getElementById('playerChoice').textContent = `${player}`;
    document.getElementById('computerChoice').textContent = `${computerChoice}`;

    let result = winner(computerChoice, player);
    console.log(result);

    document.getElementById('result').textContent = `${result}`;
}

document.querySelector('.Rock').addEventListener('click', () => playGame('Rock'));
document.querySelector('.paper').addEventListener('click', () => playGame('paper'));
document.querySelector('.scissors').addEventListener('click', () => playGame('scissors'));
