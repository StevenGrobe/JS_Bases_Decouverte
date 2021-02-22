// you can write js here
console.log('exo-5');

const input = "she sells sea shells by the sea shore".toLowerCase();
/* const input = prompt("Entrez votre phrase à traduire ici"); */
const vowels = ['a','e','i','o','u','y'];
let resultArray = [];

for (let i = 0; i < input.length; i++) { // boucle for pour lire mon input
    for (let j = 0; j < vowels.length; j++) { // boucle for pour lire le tableau vowels
        if (input[i] === vowels[j]) { // Si une valeur de input = à vowels
            resultArray.push(input[i]); // Remplis le tableau avec la valeur de l'input
            }
        }
}
console.log(resultArray.join('').toUpperCase()); // Methode join() renvoye une chaine de charactere qui correspond aux entrées de notre array
