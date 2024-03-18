function Person(name, age) { this.name = name; this.age = age; }
var person =  Person("John Doe", 30);
console.log(person.name);

// Here we are trying make the constructor function. If we are trying make the constructor function 
//then we have to apply  var person .var person = new Person("John Doe",20);

//Here is the correct solution of the above code :
// function Person(name, age) { this.name = name; this.age = age; }
// var person = new Person("John Doe", 30);
// console.log(person.name);

