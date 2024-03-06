// Write a program to print all even number first and then all odd numbers using only one iteration

let even = "";
let odd = "";
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    even += i; 
    even += " "
  } else {
    odd += i; 
    odd += " "
  }
}

console.log('odd:', odd);
console.log('even:', even);
  