//Write a program to dispaly number from 1-20 using all types of loops

function displayUsingFor() {
    console.log("Using for loop:");
    for (let i = 1; i <= 20; i++) {
      console.log(i);
    }
  }
  
function displayUsingWhile() {
    console.log("Using while loop:");
    let i = 1;
    while (i <= 20) {
      console.log(i);
      i++;
    }
  }
  
displayUsingFor();
console.log(); 
displayUsingWhile();

  