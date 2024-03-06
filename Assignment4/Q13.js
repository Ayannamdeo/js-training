// Write a program to return inverse of an array

const arr1 = [3, 2, 5, 6, 9, 10];
let max = arr1[0];

for(let x of arr1){
    if (x>max){
        max = x;
    }
}
const res = new Array(max+1);
for(let i = 0; i<arr1.length; i++){
    res[arr1[i]] = i;
}
console.log(res);
