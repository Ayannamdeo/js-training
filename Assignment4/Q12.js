// Write a program to display intersection of two array

const arr1 = [1,2 ,3, 4, 5];
const arr2 = [4, 5, 6, 7];

const inter = new Set(arr1);
const res = [];


for(let n of arr2){
    if (inter.has(n)){
        res.push(n);
    }
}
console.log(res);
