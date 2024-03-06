//  Write a function to take input(age, name, phone no.) from user and display it

function person (){
    const name = prompt("enter your name");
    const age = prompt("enter your age");
    const phone = prompt("enter your phone no.");

    console.log(`your name is ${name}`);
    console.log(`your age is ${age}`);
    console.log(`your phone no. is ${phone}`);
}

person();