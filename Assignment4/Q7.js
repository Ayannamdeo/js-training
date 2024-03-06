// Write a program to find index of duplicate elements in an array

const arr = [1, 2, 3, 1, 4, 3, 5];
const hashset = new Set();
const duplicates = []

for (let i = 0; i<arr.length; i++){
    if (hashset.has(arr[i])){
        duplicates.push(i);
    } else {
        hashset.add(arr[i]);
    }
}

console.log(duplicates)
