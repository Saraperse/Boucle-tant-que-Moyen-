
var nombreEssai = 0;
var random = Math.floor(Math.random(1,100)*101);
var readline = require("readline-sync");
console.log("Devinez le nombre choisi par l'ordinateur entre 1 et 100 ! ");
var saisie = 0;




do {
console.log("**********************");
nombreEssai = nombreEssai+1;
console.log("Nonmre d'Essai : " + nombreEssai);



saisie= readline.questionInt("saisir un nombre ! ");
console.log("Votre numéro saisi : " + saisie);

    if (saisie > random){
        console.log("trop grand");
     }if (saisie < random) {
        console.log("trop petit"); 
    } 
}
while (saisie != random); // saisie = random
console.log("Felicitation. Le nombre était " + random); 





