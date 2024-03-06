// Give an example of using multiple callback functions in a single function in JavaScript

function Performtask(arr, inc, sq, div){

setTimeout(() => {
    console.log('performing task 1: ');
    arr.forEach(inc);
}, 2000);

setTimeout(()=> {
    console.log('performing task 2');
    arr.forEach(sq);
}, 4000);

setTimeout(() => {
    console.log('performing task 3');
    arr.forEach(div);
}, 6000);
}

const inc = (x) => console.log(x+1);
const sq = (x) => console.log(x*x);
const div = (x) => console.log(x/1.5);
const arr = [1, 2 ,3, 4, 5];

Performtask(arr, inc, sq, div);