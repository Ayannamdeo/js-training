// Write a program to give a random output between 1 to 10 (AC: 2 simultaneous answers could not be same)
const upperbound = 10;
const lowerbound = 1;
let prev = -1;

for(let i = 1; i<= 50; i++){

    let randomoutput = Math.floor(Math.random()*(upperbound - lowerbound) + lowerbound);
    while(randomoutput === prev){
        randomoutput = Math.floor(Math.random()*(upperbound - lowerbound) + lowerbound);
    }
    prev = randomoutput;

    console.log(randomoutput);
}
