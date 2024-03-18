// Find Error in below questions and rectify them

let myArray = [1, 2, 3, 4];
for (let i = 0; i <= myArray.length; i++) {
   console.log(myArray[i]);
}

//Error: i goes upto the array.length i.e out of bound and try to access the array element so 
// at last it would print the undefined.
// correct one is :


let myArray = [1, 2, 3, 4];
for (let i = 0; i < myArray.length; i++) {
   console.log(myArray[i]);
}
