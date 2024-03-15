//All of the above questions from 3-6 needs to be done with arrow functions also

const doSubtraction = (a,b, fn) => fn(a, b);

const minus = (a, b) => a-b;

console.log(doSubtraction(3,2, minus));

/////////////////////////////////////////////////////////////////////////////////////

const square = (n) => n*n;

console.log(square(9));

// //////////////////////////////////////////////////////////////////////////////////////

const sum = (a, b) => a+b;

console.log(sum(3,5));

// //////////////////////////////////////////////////////////////////////////////////////

const oddEven = (n) => {
    return n%2 === 0;
}

console.log(oddEven(8));
console.log(oddEven(5));