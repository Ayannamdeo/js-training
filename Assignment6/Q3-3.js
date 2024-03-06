// 3.3 Create a class Teacher that inherits from the Person class and has a property subjectsTaught. Override the farewell() method to include information about what the teacher teaches.


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

class Teacher extends Person{
    constructor(name, age, gender, interest, subject){
        super(name, age, gender, interest);
        this.subject =  subject;
    }
    farewell(){
        console.log(`The Teacher ${this.name} teaches the subject ${this.subject}`);
    }
}

const t1 = new Teacher('sana', 33, 'female', 'football', 'biology');

t1.greeting();
t1.farewell();
