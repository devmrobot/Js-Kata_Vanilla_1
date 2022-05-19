// Crée une fonction qui contient la logique pour ré-écrire ces noms afin de convertir un nom comme anTHoNY en Anthony.

const formatName = (txt) => {
  return FirstLetterMaj = txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();
}

console.log(formatName("anTHoNY"));



// Given an array of names of people but mixing lower case and upper case letters, you will have to:

const peoples = ['JoHn', 'ChrISTiana', 'anThoNY', 'MARia', 'jaMeS', 'MIChaEl', 'jeNNIFeR'];

const newArray = peoples.map(people => {
  return people.charAt(0).toUpperCase() + people.substring(1).toLowerCase()
});

console.log(newArray);
