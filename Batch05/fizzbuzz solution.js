
// Écrire un programme qui renvoie : 
// 1 - "fizz" dans le cas ou le nombre saisi en paramètre de la fonction est un multiple de 3
// 2 - "buzz" dans le cas ou le nombre saisi en paramètre de la fonction est un multiple de 5
// 3 - "fizzbuzz" dans le cas ou le nombre saisi est à la fois un multiple de 3 et de 5
// 4 - Le nombre dans le cas ou ce dernier est ni un multiple de 3, ni un multiple de 5

const fizzbuzz = (num) => {
    if(num % 3 === 0){
       console.log("fizz");
    }
    else if(num % 5 === 0 ){
        console.log("buzz");
    }
    else if((num % 5 === 0) && (num % 3 === 0)){
        console.log("fizzbuzz");
    }
    else console.log(num);
}

// tester la méthode à l'aide de var_dump()
fizzbuzz(1);
fizzbuzz(5);
fizzbuzz(15);
fizzbuzz(25);
fizzbuzz(9);