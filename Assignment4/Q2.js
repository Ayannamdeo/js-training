// Write a program to reverse a string ("Hello John" => "olleH nhoJ")

const string = 'my name is ayan';
let res= "";
const words = string.split(" ");

const reverse = (str) =>{
    let newstr = "";
    for(let i =str.length-1; i>=0 ; i--){
        newstr += str[i];
    }
    return newstr;
}

for(let word of words){
    res += reverse(word);
    res += " ";
}

console.log(res);
