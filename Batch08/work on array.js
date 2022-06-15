
// Retourner la somme des éléments qui sont des nombres.
// interdit d'utiliser des boucles : for, for..in...)

const arr = [1, "John", 24, true];

const sum = () => {
  arr.filter(Number.isFinite).reduce((a, b) => a + b);
};
sum();

// TIPS - comment choisir entre map, filter et reduce ?

// https://www.youtube.com/watch?v=l0dpwuuh-D0

// Mon tableau de sortie est différent mais de la même taille => map
// Mon tableau de sortie est plus petit en longueur => filter
// Mon tableau de sortie est une valeur => reduce

const negTemp = [-40, -20, -5, 12, -18, 14];

const isNegTemp = negTemp.filter((neg) => neg < 0);
console.log(isNegTemp);

const someArr = [1, 2, 3, 4, 5];

// Renvoyer les nombres pairs + impairs
const doubleArr = someArr.map((sum) => sum * 2);

console.log(doubleArr);

// Renvoyer les nombres pairs + impairs
const oddArr = someArr.filter((num) => num % 2 === 0);
const evenArr = someArr.filter((num) => num % 2 != 0);

console.log(oddArr);
console.log(evenArr);

// Renvoyer la valeur la plus haute et la moins haute
const maxArr = someArr.reduce((max, e) => Math.max(max, e));
const minArr = someArr.reduce((min, e) => Math.min(min, e));

console.log(maxArr);
console.log(minArr);

// Renvoyer la some des valeurs
const sumValueArr = someArr.reduce((a, b) => a + b);

console.log(sumValueArr);

// Renvoyer la some des valeurs
const isOddValueArr = someArr
  .filter((num) => num % 2 === 0)
  .reduce((a, b) => a + b);

console.log(isOddValueArr);

// combien les hommes gagneraient au total s'ils étaient augmentés de 1000 euros ?
const userList = [
  { name: "Hector", genre: "M", salary: 35000 },
  { name: "Edouard", genre: "M", salary: 29000 },
  { name: "José", genre: "M", salary: 38000 },
  { name: "Charlotte", genre: "F", salary: 45000 },
  { name: "Mireille", genre: "F", salary: 67000 },
  { name: "Leon", genre: "M", salary: 56000 },
  { name: "Marie", genre: "F", salary: 90000 },
];

const menSalaryTotal = userList
  .filter((user) => user.genre === "M")
  .map((user) => (user.salary += 1000))
  .reduce((menSalaryTotal, salary) => menSalaryTotal + salary);

console.log(menSalaryTotal);

// Renvoyer uniquement les hommes avec 1000 euros de salaire en plus ?
const menSalaryPlus = userList.filter(
  (user) => user.genre === "M" && (user.salary += 1000)
);

console.log(menSalaryPlus);
