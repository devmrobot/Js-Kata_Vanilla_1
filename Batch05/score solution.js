// Write a function that takes such collection and counts the points of our team in the championship. 
// Rules for counting points for each match:

//     if x>y - 3 points
//     if x<y - 0 point
//     if x=y - 1 point

const games1 = ['1:0','2:0','3:0','4:0','2:1','3:1','4:1','3:2','4:2','4:3']; // 30
const games2 = ['1:1','2:2','3:3','4:4','2:2','3:3','4:4','3:3','4:4','4:4']; // 10
const games3 = ['0:1','0:2','0:3','0:4','1:2','1:3','1:4','2:3','2:4','3:4']; // 0
const games4 = ['1:0','2:0','3:0','4:0','2:1','1:3','1:4','2:3','2:4','3:4']; // 15
const games5 = ['1:0','2:0','3:0','4:4','2:2','3:3','1:4','2:3','2:4','3:4']; // 12

const totalScore = (games) => {
    const score = games.map(game => {
        const [x,y] = game.split(':');
        console.log([x,y]);
        if (x > y) {
            return 3;
        }
        else if (x < y) {
            return 0;
        }
        else return 1;
        })
    console.log(score);
    const result= score.reduce((acc, currentValue) => acc + currentValue,
    0
    );
console.log(result);
}
totalScore((games1));