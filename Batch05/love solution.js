// Eve & Villanelle think they are in love, but around where they live, 
// they will only know once they pick a flower each. 

// If one of the flowers has an even number of petals and the other has an 
// odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and 
// return true if they are in love and false if they aren't.

const areTheyInLove = (a,b) => {
    if((a % 2 === 0) && (b %2 !==0)){
    return "In love"
    }
    else return "not in love"
}
console.log(areTheyInLove(2,2));