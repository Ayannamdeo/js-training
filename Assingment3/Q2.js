// Write a program to display following output as shown in figure

// 1
// 2 3
// 4 5 6
// 7 8 9 10

let str = "";
let count = 1;

for(let i =1; i<5; i++){
    for(let j =1; j<=i; j++){
        str += count;
        str += " ";
        count++
    }
    str +="\n";
}
console.log(str);


// 1
// 2 2
// 3 3 3
// 4 4 4 4

str = "";
for (let i=1; i<5; i++){
    for(let j=1; j<= i; j++){
        str += i;
        str += " ";
    }
    str += "\n";
}

console.log(str);


// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

str = "";

for(let i= 5; i>0; i--){
    for(let j= 1; j<=i ; j++){
        str += j;
        str += " ";
    }
    str += "\n";
}

for (let i =2; i<=5; i++){
    for(let j =1; j<= i; j++){
        str += j;
        str += " ";
    }
    str += "\n";
}

console.log(str);
