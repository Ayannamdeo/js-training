// Write a program to reverse an array

const arr1 = [3, 2, 5, 6, 9, 10];
let l = 0;
let r = arr1.length-1;
let temp = 0;

while (l<=r){
    temp = arr1[l];
    arr1[l] = arr1[r];
    arr1[r] = temp;
    
    l++;
    r--;
}
console.log(arr1);
