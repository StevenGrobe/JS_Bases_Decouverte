// you can write js here

console.log('exo-4');

const secretMessage = ["Learning", "isn't", "about", "what", "you", "get", "right", "the", "first", "time,", "it's", "about", "what", "you", "can", "figure", "out.", "-2015,", "Chris", "Pine,", "Learn", "JavaScript"];
const poppedSecretMessage = secretMessage.pop(); // Enlève la dernière valeur du tableau
const pushedSecretMessage = secretMessage.push('to', 'program'); // Rajoute des entrées à mon array
const shiftedSecretMessage = secretMessage.shift(); // Delete la premiere entrée de l'array
const EasilySecretMessage = secretMessage[secretMessage.indexOf('right')] = "easily" // Remplace l'entrée 'right' de mon array par "easily"
const unshiftedSecretMessage = secretMessage.unshift('Programming') // Ajoute la première entrée de l'array
const splicedSecretMessage = secretMessage.splice(5, 5, 'know'); // Remplace l'entrée 5 de l'array, 5 valeurs, 'know'
console.log(secretMessage.join(' ')); // Methode join() renvoye une chaine de charactere qui correspond aux entrées de notre array
