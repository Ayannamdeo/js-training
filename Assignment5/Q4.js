// Write a program deepClone that takes an object as input and returns a deep copy of that object. The function should handle nested objects and arrays.

function deepClone(obj) {
    if (Array.isArray(obj)) {
      return obj.map(element => deepClone(element));
    }
    
    if (typeof obj === 'object' && obj !== null) {
      let clonedObj = {};
      for (let key in obj) {
        clonedObj[key] = deepClone(obj[key]);
      }
      return clonedObj;
    }
    
    return obj;
  }
  
  const obj = {
    name: 'ram',
    age: 30,
    address: {
      city: 'UP',
      country: 'India'
    },
    hobbies: ['reading', 'traveling']
  };
  
  const clonedObject = deepClone(obj);
  console.log(clonedObject);
  