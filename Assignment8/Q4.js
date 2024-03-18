let myString = 'hello world';
if (myString.length > 0) {
    console.log('The length of the string is: ' + myString.length);
} else {
    console.log('The string is empty');
}

let myNumber = parseInt(myString);
if (myNumber) {
   console.log('The number is: ' + myNumber);
} else {
   console.log('The value is not a number');
}

//Here we enter the mytring i.e hello World in the parseInt check i.e if it not a number then NaN will return .
//and Nan is a falsy value so when we are checking the if condition it will goes to the else part 