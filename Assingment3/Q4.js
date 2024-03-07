//Write a program to print all even number first and then all odd numbers


function printEvenOdd(limit) {
    console.log("Even numbers:");
    for (let i = 1; i <= limit; i++) {
      if (i % 2 === 0) {
        console.log(i);
      }
    }
  
    console.log("Odd numbers:");
    for (let i = 1; i <= limit; i++) {
      if (i % 2 !== 0) {
        console.log(i);
      }
    }
  }
  
printEvenOdd(10); 
  