let myObject = { name: 'John', age: 30 };
for (property in myObject) {
   console.log(property + ': ' + myObject.property);
}

//Error: In for in loop we cannot access the object property by .It can be accessed by the bracket notation

let myObject = { name: 'John', age: 30 };
for (property in myObject) {
   console.log(property + ': ' + myObject[property]);
}