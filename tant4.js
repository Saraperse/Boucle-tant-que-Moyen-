var cpt = 0;
var nb1 = retournerPetit();
var nb2 = retournerPetit();
var nb3 = retournerPetit();

for (cpt = 0; cpt < 3; cpt++) {
  nb1 = Math.floor(Math.random(1, 20) * 21);
  nb2 = Math.floor(Math.random(1, 20) * 21);
  nb3 = Math.floor(Math.random(1, 20) * 21);
}
console.log(
  "nb1 : " + nb1 + " - " + (" nb2 : " + nb2) + " - " + (" nb3 :" + nb3)
);

var a = retournerPetit(nb1, nb2, nb3);
console.log("La valeur la plus petite est " + a);

function retournerPetit(nb1, nb2, nb3) {
  if (nb1 <= nb2 && nb1 <= nb3) {
    return nb1;
  } else if (nb2 <= nb1 && nb2 <= nb3) {
    return nb2;
  } else {
    return nb3;
  }
}

// if (nb1 > nb2 && nb1 > nb3) {
//     console.log(nb1 + " est le nombre le plus grand");
// } else if (nb2 > nb1 && nb2 > nb3) {
//     console.log(nb2 + " est le nombre le plus grand");

// } else {
//     console.log(nb3 + " est le nombre le plus grand")
// }
