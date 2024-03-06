// Write a program to sort an array (bubble sort)

const arr = [ 5, 4, 3, 2, 1];
let flag = false;

for (let i = 0; i<arr.length - 1; i++){
    flag = false;
    for (let j = 0; j<arr.length - 1- i; j++){
        if (arr[j]>arr[j+1]){
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
            flag = true;
        }
    }
     if (!flag){
            break;
        }
}
console.log(arr);
