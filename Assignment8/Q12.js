// async function getData() {
//    setTimeout(() => [1, 2, 3, 4, 5], 1000); 

// }
//  getData().then(function(data) {
//     console.log("data: ", data);
//  });
// console.log(getData());


//Error: The setTimeout function return the Timeout object .So in this question the array is not returning the array value .

//To rectify the code we have to return promise

async function getData() {
    return new Promise((resolve)=>{
        setTimeout(() => resolve([1, 2, 3, 4, 5]), 1000); 
    })
 
 }
  getData().then(function(data) {
     console.log("data: ", data);
  });



