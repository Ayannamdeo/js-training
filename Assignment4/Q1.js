// Write a program to remove duplicate charecters from a string ("Hello Yellow" => "Helo Yw")

const string = "Hello Yellow";
const uniq = new Set();

for(let c of string){
    uniq.add(c);
}

let newstring = "";

uniq.forEach(function(v){
    newstring += v;
});

console.log(newstring);
