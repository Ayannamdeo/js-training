let myObject = { name: 'John', age: 30 };
for (property in myObject) {
   console.log(property + ': ' + myObject.property);
}

//The variable property holds the name of each property during each iteration, but to access the corresponding value, use square brackets [] notation instead of dot notation 
let myObject = { name: 'John', age: 30 };
for (property in myObject) {
   console.log(property + ': ' + myObject[property]);
}