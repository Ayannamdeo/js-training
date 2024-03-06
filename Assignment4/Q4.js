// Write a program to convert given string to upperCase OR lowerCase

function convertCase(str, toUpperCase) {
    if (toUpperCase) {
      return str.toUpperCase();
    } else {
      return str.toLowerCase();
    }
  }
  
  const inputString = "Hello, World!"; 
  
  const convertedString = convertCase(inputString, true);
  console.log(convertedString);
  