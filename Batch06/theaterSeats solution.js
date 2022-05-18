/*
[EN] Complete the theaterSeats function to return a matrix (array of arrays)
where each sub-array contains the position of the seats in a row.
example :
[
  ['1-1', '1-2', '1-3', ..., '1-100'], 
  ['2-1', '2-2', '2-3', ..., '2-100'],
  ... 
  ['26-1', '26-2', '26-3', ..., '26-100']
] 

[FR] Compléter la fonction theaterSieges de manière à ce qu'elle retourne une matrice (tableau de tableaux)
où chaque sous-tableau liste les positions des sieges d'une rangée.
exemple :
[
  ['1-1', '1-2', '1-3', ..., '1-100'], 
  ['2-1', '2-2', '2-3', ..., '2-100'],
  ... 
  ['26-1', '26-2', '26-3', ..., '26-100']
] 
*/

function theaterSeats() {
 // TODO
 const arrOne = [];
 const arrTwo = [];
 for (let i = 1; i < 27; i++) {
  arrOne.push(i);
 }
 for (let j = 1; j < 101; j++) {
  arrTwo.push(j);
 }
 arrOne.map((column) => arrTwo.map((seat) => `${column}-${seat}`));
}


// VARIANTE
const list = [];
function theaterSeats() {
 for (let i = 1; i < 27; i++) {
  for (let j = 1; j < 101; j++) {
   list.push(`${i}-${j}`);
  }
 }
}

theaterSeats();
