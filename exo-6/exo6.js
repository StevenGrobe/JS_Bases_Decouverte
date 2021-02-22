// Cours 8 de Codecademy
console.log("exo-6");

var joeInfo = {
    name: "Joe's house",
    rooms: 5,
    garage: false,
    bathrooms: 1 + 2,
    cars: ['Clio', 'Van'],
};
// ! Ne faites pas de modification au dessus de cette ligne !

// 1. Afficher le nombre de voitures de Joe
console.log('Le nombre de voitures de Joe : ', joeInfo.cars.length);
// 2. Changer le nombre de salles de bains de Joe : il n'en possède qu'une. Afficher le nouveau nombre de salles de bain.
joeInfo.bathrooms = 1;
console.log('Salle de bain de Joe : ', joeInfo.bathrooms);
// 3. Joe vient d'acquérir un garage. Afficher cette nouvelle information. 
joeInfo.garage = true;
console.log("Joe vient d'acquérir un garage", '-', joeInfo.garage);

// Objet team
let team = {
    // Tableau d'objet
    players: [
        {
            firstName: "Pablo",
            lastName: "Sanchez",
            age: 11,
        },
    ],
    games: [
        {
            opponent: "Broncos",
            teamPoints: 42,
            opponentPoints: 27,
        },
    ],

    addPlayer(firstName, lastName, age) {
        team.players.push(
            {
                firstName,
                lastName,
                age,
            }
        );
    },

    addGame(opponent, teamPoints, opponentPoints) {
        team.games.push(
            {
                opponent,
                teamPoints,
                opponentPoints,
            }
        );
    }
};

// Appel de mes fonctions
team.addPlayer("Mallie", "Durgan", 9);
team.addPlayer("Steven", "Grobe", 23);
team.addPlayer("Luca", "Borremans", 19);


team.addGame("Knight", 8, 64);
team.addGame("Cat", 45, 10);
team.addGame("Dog", 5, 18);

// Affichage array
console.log(team.players);
console.log(team.games);

// Calculer la somme des points de l'équipe
const totalTeamPoint = team.games.reduce(
    function (prev, cur) {
        return prev + cur.teamPoints;
    }, 0);

console.log('Somme des points de notre équipe : ', totalTeamPoint);

// Calculer moyenne des points des équipes adverses
let sum = 0;
for (let i = 0; i < team.games.length; i++) {
    sum += team.games[i].opponentPoints;
}
let averageOpponentPoints = sum / team.games.length;

console.log('Average opponent points : ', averageOpponentPoints);

// Fonction calcul le plus agé
function calculOldest() {
    highestAge = 0
    calculAge = team.players.reduce(
        function (prev, curr) {
            if (curr.age > highestAge) {
                highestAge = curr.age;
                oldestPerson = curr.firstName;
                return prev, curr;
            }
        });
}
calculOldest();
console.log('le plus agé est', oldestPerson, highestAge, 'ans');

