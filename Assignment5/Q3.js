// Write a program to remove all the id key from array of object 

const people = [
    { name: 'John', id: 30 },
    { name: 'Alice', id: 25 },
    { name: 'Bob', id: 35 },
    { name: 'Bana', id: 19 },
    { name: 'Bobaab', id: 10 }
];

for (let i = 0; i<people.length; i++){
    delete people[i].id;
}
console.log(people);