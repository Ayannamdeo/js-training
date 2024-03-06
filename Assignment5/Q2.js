// Write a program to sort an array of object on the basis of age 

const people = [
    { name: 'John', age: 30 },
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 35 },
    { name: 'Bana', age: 19 },
    { name: 'Bobaab', age: 10 }
];

for (let i = 0; i<people.length - 1; i++){
    for(let j = 0; j< people.length - 1 - i; j++){
        if (people[j].age > people[j+1].age){
            let temp = people[j];
            people[j] = people[j+1];
            people[j+1] = temp;
        }
    }
}
console.log(people);
