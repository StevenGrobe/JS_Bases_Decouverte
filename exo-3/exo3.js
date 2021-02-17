// you can write js here
console.log('exo-3');

// Choix du joueur avec Prompt rock paper scissors et bomb
function getPlayerChoice() {
    playerInput = prompt("Your choice ( rock, paper, scissors) ?").toLowerCase();
    while (playerInput != "rock" && playerInput != "paper" && playerInput != "scissors" && playerInput != "bomb") {
        playerInput = prompt("Error 404 : You must choose rock, paper or scissors").toLowerCase();
    }
    console.log('Player :', playerInput);
    return playerInput;
}

// Choix de l'ordinateur avec MathRandom()
function getComputerChoice() {
    computerInput = Math.floor(Math.random() * 3);
    // console.log('Computer :', computerInput); // Debug ma variable
    if (computerInput === 0) {
        computerInput = "rock";
    } else if (computerInput === 1) {
        computerInput = "paper";
    } else if (computerInput === 2) {
        computerInput = "scissors";
    }
    console.log(computerInput);
    return computerInput;
}

// Fonction qui lance le jeux
function playgame() {
    uChoice = getPlayerChoice();
    computerChoice = getComputerChoice();
    findWinner(uChoice, computerChoice);
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

// Utilisation de ma fonction playgame()
playgame();