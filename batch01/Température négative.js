// Ecrire un tableau de temperatures et vérifier si toutes les températures sont négatives
const temp1 = [-40, -20, -5, 15, -8, 12];
const negTemp = temp1.every(temperature => temperature < 0);
console.log(negTemp);

// Ecrire un tableau de temperatures et une fonction qui renvoi un tableau avec uniquement les températures négatives
const temp2 = [-40, -20, -5, 15, -8, 12];
const negTemp2 =temp2.filter(temperature => temperature < 0);
console.log(negTemp2);


const temp3 = [-40, -20, -5, 15, -8, 12];
const negTemp3 = (x) => {
    temp3.includes(x);
}
negTemp3(3);
