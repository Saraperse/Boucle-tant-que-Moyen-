var readline = require("readline-sync");
saisie = readline.questionInt("saisissez un nombre pair et divisible par 3  : ");
var nombreEssai = 0;



while(saisie%2 !==0  || saisie%3 !==0){
    
       if (saisie % 2 === 0) {
        console.log("Le nombre est pair");
      } else {
        console.log("Le nombre n'est pas pair");
      }
      if (saisie % 3 === 0) {
        console.log("Le nombre est divisible par 3");
      } else {
        console.log("Le nombre n'est pas divisible par 3");
      }
      nombreEssai = nombreEssai +1;
      if (nombreEssai > 1){
        console.log("******** Essai numero " + nombreEssai + "************"); 
        saisie = readline.questionInt("saisissez un nombre pair et divisible par 3  : ");
      }     
       
     
}

