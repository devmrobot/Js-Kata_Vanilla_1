/*
[EN] Here's an array of persons
You should write the findAdult function, that returns 
a new array with 2 sub-arrays inside : 
- The first one with only adult women
- The second one with only adult men
(consider that an adult is a person who is at least 18)
Example : [ [<adult women>], [<adult men>] ]

[FR] Voici un tableau de personnes.
Tu dois écire le code de la fonction findAdult, qui renvoie un
nouveau tableau avec 2 tableaux à l'intérieur: 
- Le premier avec uniquement les femmes adultes.
- Le deuxième avec uniquement les hommes adultes.
(Compte tenu qu'on est adulte à 18 ans)
Exemple : [ [<femmes adultes>], [<hommes adultes>] ]
*/

const persons = [
  { name: 'Mary Poppins', age: 32, sex: 'female' },
  { name: 'Tony Stark', age: 36, sex: 'male' },
  { name: 'John Doe', age: 12, sex: 'male' },
  { name: 'Jane Doe', age: 6, sex: 'female' },
  { name: 'Maggie Simpson', age: 2, sex: 'female' },
  { name: 'Leonardo', age: 92, sex: 'male' },
  { name: 'Carla Moreau', age: 24, sex: 'female' },
  { name: 'Mickael Jackson', age: 17, sex: 'male' },
  { name: 'Penelope Milena', age: 27, sex: 'female' },
  { name: 'Homer Simpson', age: 45, sex: 'male' },
  { name: 'Leonardo Di Caprio', age: 42, sex: 'male' },
  { name: 'Carla Bruni', age: 54, sex: 'female' },
  { name: 'Lisa Simpson', age: 13, sex: 'female' },
  { name: 'Millie Bobby Brown', age: 15, sex: 'female' },
  { name: 'Penelope Cruz', age: 47, sex: 'female' },
];

function findAdult(arr) {
  const men = persons.filter(person => person.age >= 18 && person.sex ==='female').map(person => person.name)
  const women = persons.filter(person => person.age >= 18 && person.sex ==='male').map(person => person.name)
  return ([men,women])
  // TODO
}

console.log(findAdults(persons))
