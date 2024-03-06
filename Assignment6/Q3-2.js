// 3.2 Create a class Student that inherits from the Person class and has a property studies. Override the greeting() method to include information about what the student is studying.

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

class Student extends Person{
    constructor(name, age, gender, interest, studies){
        super(name, age, gender, interest);
        this.studies = studies;
    }
    greeting(){
        console.log(`Hi, my name is ${this.name}, I am ${this.age} years old and I am currently studying ${this.studies}`);
    }
}

const s1 = new Student('namdeo', 20, 'male', 'tv', 'maths');

s1.greeting();
s1.farewell();
