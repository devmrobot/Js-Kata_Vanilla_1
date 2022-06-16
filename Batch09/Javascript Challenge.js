
// CHALLENGE JavaScript #1
// Retourner la somme des éléments qui sont des nombres.
// interdit d'utiliser des boucles : for, for..in...)

const arr = [1, "John", 24, true];

const sum = () => {
  arr.filter(Number.isFinite).reduce((a, b) => a + b);
};
sum();

// CHALLENGE JavaScript #2
// Transformer un simple nombre en tableau contenant chaque chiffre dans l'ordre inverse : 
// Exemple : 348597 => [7,9,5,8,4,3]

const num = 348597;

const reverse = (num) => {
  return num.toString().split('').reverse().map(Number);
}
console.log(reverse(num));

// num.toString() transforme number en caractère
// .split('') transforme la chaine de caractère en tableau
// .reverse() permet de trier en sens inverse
// .map(Number) permet de renvoyer un tableau de chiffre et non plus en string

// VARIANTE const reverse = num.toString().split('').reverse().map(Number);

console.log(reverse);