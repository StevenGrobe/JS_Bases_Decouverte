console.log('exo-01');

// let kelvins = 294;  // Déclaration de la variable kelvins, on lui assigne la valeur 294
const kelvins = prompt("Quelle est la température en Kelvins aujourd'hui ?"); // On demande à l'utilisateur de rentrer une valeur pour la variable kelvins
const celsius = kelvins - 273; // Déclaration de la variable celsius, on lui assigne la valeur de la variable kelvins - 273
const fahrenheits = celsius * (9/5) + 32  // Déclaration de la variable fahrenheits, on lui assigne la valeur de la variable celesius * (9/5) + 32

console.log(kelvins); // Affiche la variable kelvins dans la console
console.log(celsius); // Affiche la variable celsius dans la console
console.log(fahrenheits); // Affiche la variable fahrenheits dans la console
console.log(Math.floor(fahrenheits)); // Affiche la variable fahrenheits en utilisant la methode floor() de la class Math, 
                                      // qui arrondi le nombre au plus grand entier.

// Affichage HTML
document.write("les kelvins sont = ", kelvins, " °K", "<br>"); // Affiche la variable kelvins
document.write("les celsius sont = ", celsius, " ℃", "<br>"); // Affiche la variable celsius
document.write("les fahrenheits sont = ", Math.floor(fahrenheits), " ℉", "<br>"); // Affiche la variable fahrenheits avec la méthode math qui arrondit
