// 3.1 Create a class Person with properties name, age, gender, and interests. Add a method greeting() that returns a string introducing the person. Also add a method farewell() that returns a string saying goodbye to the person.

class Person{
    constructor(name, age, gender, interest){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.interest = interest;
    }
    greeting(){
        console.log(`Hi, my name is ${this.name}, I am ${this.age} years old and my hobbies are ${this.interest}`);
    }
    farewell(){
        console.log(`goodbye ${this.name}`);
    }
}

const p1 = new Person('Ayan', 23, 'male', 'watching movies');

p1.greeting();
p1.farewell();

