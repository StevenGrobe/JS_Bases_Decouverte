// you can write js here
console.log('exo-3');

const playerInput = prompt("Your choice ( rock, paper, scissors) ?").toLowerCase();

// Choix du joueur avec Prompt rock paper scissors et bomb
function getPlayerChoice(playerInput) {
    if ((playerInput != "rock") && (playerInput != "paper") && (playerInput != "scissors") && (playerInput != "bomb")) {
        console.log('Player : error');
    } else {
        console.log('Player : ', playerInput);
    }
    return playerInput;
}

// Choix de l'ordinateur avec MathRandom()
function getComputerChoice() {
    let computerInput = Math.floor(Math.random() * 3); // Randomize de 0 à 2
    if (computerInput === 0) {
        computerInput = "rock";
    } else if (computerInput === 1) {
        computerInput = "paper";
    } else {
        computerInput = "scissors";
    } 
    console.log('Computer :', computerInput);
    return computerInput;
}

// Compare les variables uChoice & computerChoice
function findWinner(uChoice, computerChoice) {
    if (uChoice === computerChoice) {
        console.log('Tied');
    } else if ((uChoice === "rock" && computerChoice === "scissors") ||
        (uChoice === "paper" && computerChoice === "rock") ||
        (uChoice === "scissors" && computerChoice === "paper") ||
        (uChoice === "bomb")) {
        console.log('Win');
    } else {
        console.log('Loose');
    }
}

// Fonction qui lance le jeux
function playgame() {
    const uchoice = getPlayerChoice(playerInput);
    const computerchoice = getComputerChoice();
    findWinner(uchoice, computerchoice);
}

// Utilisation de ma fonction playgame()
playgame();