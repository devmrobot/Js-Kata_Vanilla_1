/*
[EN] 
write a function, which takes two parameters.
These two parameters are arrays of number strings.
Your function must return a single array with the sum of
corresponding elements converted into a string.
If one of the two elements is empty, it should be considered as 0.
Example :
sumArr (["1", "2", "3"], ["2", "4", "1"]) should return ["3", "6", "4"]
sumArr (["2", "7", "3"], ["2", "4", "9"]) should return ["4", "11", "12"]
sumArr (["2", "7", "3", "8", "2"], ["2", "4", "9"]) should return ["4", "11", " 12 "," 8 "," 2 "]

[FR] 
écris une fonction, qui prend deux paramètres.
Ces deux paramètres sont des arrays de numbres sous forme de chaine de caractère.
Ta fonction doit renvoyer un seul array avec la somme des
éléments correspondants convertis en chaine.
Si l'un des deux éléments est vide, il doit être considéré comme 0.
Exemple :
sumArr( ["1", "2", "3"], ["2", "4", "1"] ) doit renvoyer ["3", "6", "4"]
sumArr( ["2", "7", "3"], ["2", "4", "9"] ) doit renvoyer ["4", "11", "12"]
sumArr( ["2", "7", "3", "8", "2"], ["2", "4", "9"] ) doit renvoyer ["4", "11", "12", "8", "2"]
*/

const arrayA = [1, 2];
const arrayB = [1, 2];

const sumArr = (arrayA, arrayB) => {
    let result = [];
    if (arrayA.length >= arrayB.length) {
        for (let i = 0; i < arrayA.length; i++) {
            arrayB[i] = arrayB[i] || 0;
            let sum = parseInt(arrayA[i]) + parseInt(arrayB[i]);
            result.push(sum.toString())
        }
    } else {
        for (let i = 0; i < arrayB.length; i++) {
            arrayA[i] = arrayB[i] || 0;
            let sum = parseInt(arrayA[i]) + parseInt(arrayB[i]);
            result.push(sum.toString())
        }
}
return result;
}


console.log(sumArr(arrayA, arrayB));
