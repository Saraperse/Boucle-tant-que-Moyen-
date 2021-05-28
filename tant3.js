var readline = require("readline-sync");

var nb1 = retourneNombre();
var nb2 = retourneNombre();
var nb3 = retourneNombre();
console.log("La moyenne est de  : " + (nb1 + nb2 + nb3)  / 3);






    function retourneNombre () {
  
        var saisie = readline.questionInt("saisissez une notre entre 0 et 20  : ");

while (saisie <0 || saisie >20) {
    saisie = readline.questionInt("Mauvaise saisie . Recommencez ! ")
}
    
 return saisie;
  
}

  


