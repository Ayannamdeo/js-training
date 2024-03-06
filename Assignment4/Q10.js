// Write a program to concatenate an input of array of arrays

const input = prompt("input your 1array elements");
const input2 = prompt("input your 2array elements");
const input3 = prompt("input your 3array elements");

const arr1 = input.split(" ");
const arr2 = input2.split(" ");
const arr3 = input3.split(" ");

let arrconcat = arr1.concat(arr2, arr3);

console.log(arrconcat)
