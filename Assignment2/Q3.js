//Write a function expression that takes in another function as an argument

function doSubtraction(fn){
    return fn(3,2);
}

function minus(a, b){
    return a-b;
}

console.log(doSubtraction(minus));