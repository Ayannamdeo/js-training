// Create a class called `Person` that has properties for `firstName`, `lastName`, and `age`. The class should also have a method called `fullName` that returns the person's full name.
// Additionally, the class should have a method called `averageAge` that takes in an array of `Person` objects and returns the average age of all the people in the array.


class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    fullName(){
        console.log(`Hi, the person name is ${this.firstName} ${this.lastName}`);
    }
    static avgAge(people){
        if (!people.length){
            return 0;
        }
        
        let totalage = 0;
        for (let person of people){
            totalage += person.age;
        }
        return totalage/people.length;
    }
}

const p1 = new Person('Ayan', 'namdeo', 20);
const p2 = new Person('raju','jura', 30);
const p3 = new Person('sana', 'khan', 40);

p1.fullName();

console.log(Person.avgAge([p1, p2, p3]));
