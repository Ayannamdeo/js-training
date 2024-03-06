// Write a program to find the last duplicate index in an array

const arr = [1, 2, 3, 3, 4, 3, 5,3,3];
const hashset = new Set();
let lastindex = 0;

for (let i = 0; i<arr.length; i++){
    if (hashset.has(arr[i])){
        lastindex = i;
    } else {
        hashset.add(arr[i]);
    }
}
console.log(lastindex)
