// Write a program to remove dupliacte elements from an array

const arr = [1, 2, 3, 1, 4, 3, 5];
const hashset = new Set();

for (let i = 0; i<arr.length; i++){
    if (hashset.has(arr[i])){
        arr.splice(i, 1);
    } else {
        hashset.add(arr[i]);
    }
}

console.log(arr)
