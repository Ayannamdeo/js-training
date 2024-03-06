// Write a program to convert given string in camel case ("hello john doe" => helloJohnDoe)

const str = "ayan namdeo is present";
const words = str.split(" ");

    for (let i = 1; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }

    const newstring = words.join("");
    
console.log(newstring)
