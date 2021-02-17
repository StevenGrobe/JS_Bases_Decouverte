console.log('exo-2');

const isTesting = true;  // true or false

const weekDay = "C'est la semaine";
const weekEnd = "C'est le weekend";

const myDate = new Date();
let getDay = myDate.getDay();
let getHours = myDate.getHours();

if (isTesting) { // Si isTesting true, demande l'heure et le jour
    getDay = prompt("Quel jour");
    getHours = prompt("Quel heure");
}

console.log(getDay, getHours);

// Afficher jour de la semaine/weekend
if (getDay > 5) {
    console.log(weekEnd);
} else {
    console.log(weekDay);
}

// Afficher en fonction des heures
if ((getDay == 1 && getHours <= 9) || (getDay == 5 && getHours >=17) || (getDay > 5)){ // Si le jour = 1 et l'heure inf ou egale à 9 OU jour = 5 et sup égale à 17
    console.log(weekEnd);
    } else {
    console.log(weekDay);
}
