// Write a program to give count of variables in a string ("abcabcdabbcc" => "a3b4c4d1")

const string = "abbbcddddeeff";
const count = new Map();

for(let c of string){
    if (count.has(c)){
        count.set(c, count.get(c)+1);
    } else {
        count.set(c,1);    
    }
    
    
}

let res = "";
count.forEach((val, key) => res += key+ val);
console.log(res);

