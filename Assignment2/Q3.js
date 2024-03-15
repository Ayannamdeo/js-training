//Write a function expression that takes in another function as an argument

function doSubtraction(a, b, fn){
    return fn(a, b);
}

function minus(a, b){
    return a-b;
}

console.log(doSubtraction(4,2, minus));