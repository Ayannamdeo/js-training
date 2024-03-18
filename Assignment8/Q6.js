var person = { name: "John Doe", age: 30, getDetails: function() { console.log(this.name + " is " + this.age + " years old"); } };
var getPersonDetails = person.getDetails;
getPersonDetails();

//Error :We can not asign the method of the object like this because the "this" scope is not in the getPersonDetails.
//For doing this we have to apply the .bind method .
