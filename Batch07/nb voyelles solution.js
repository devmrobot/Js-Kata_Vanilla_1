
/* Créez un programme qui retourne le nombre de voyelles 
dans une chaine de caractères. */


const getVowels = (string) => {
  const Vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
  let vowelsCount = 0;
  for(var i = 0; i < string.length ; i++) {
     if (Vowels.includes(string[i])) {
        vowelsCount++;
    }
  }
return vowelsCount;
}
console.log(getVowels("voyel"));

/*
   function getVowels(string) {
      const Vowels = 'aAeEiIoOuUyY';
      let vowelsCount = 0;
      for(var i = 0; i < string.length ; i++) {
         if (Vowels.includes(string[i])) {
            vowelsCount++;
        }
      }
   return vowelsCount;
   }
console.log(getVowels("voyel"));
*/

/*
const vowels = (txt) => {
const checker = ['a', 'e', 'i', 'o', 'u', 'y'];
let count = 0;
//for (let i = 0; i < txt.length; i++) {
for (let letter of txt.toLowerCase()){
  if (checker.includes(letter)){
    count++;
  }
return count;
}
}

console.log(vowels('voyelle'));
*/

/*  
Function vowels(str){
const match = str.match(/[aeiou]/gi);
// gi : g indique que c'est global - cad pour toute la chaine de charactère 
le i indique que c'est insensible à la casse //
return match ? match.length : 0 ;
}
*/


/*
function getVowels(string) {
  var Vowels = 'aAeEiIoOuU';
  var vowelsCount = 0;
  for(var i = 0; i < string.length ; i++) {
     if (Vowels.indexOf(string[i]) !== -1) {
        vowelsCount += 1;
    }
  }
return vowelsCount;
}

console.log(getVowels("voyel"));
*/