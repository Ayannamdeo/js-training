//Write a program to display prime numbers from 1 to 50

function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
console.log("Prime numbers from 1 to 50:");
for (let i = 1; i <= 50; i++) {
    if (isPrime(i)) {
    console.log(i);
    }
}

  
  