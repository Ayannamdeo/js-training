// Write a program to iterate over object.

const obj = {
    name: 'John',
    age: 30,
    city: 'New York',
    gender: 'Male'
}
for(let key in obj){
    console.log(`${key} : ${obj[key]}`);
}

// Object.entries(obj).forEach(([key, value]) => console.log(`${key} : ${value}`));
