// Implement a function that returns a resolved Promise after a specified delay using async/await.

function dosomething(delay){
    return new Promise((resolve, reject) => setTimeout(()=> resolve(`promise resolved after ${delay} miliseconds`), delay));
 }
 
 async function testasync(){
    console.log('gonna do something');
    const result = await dosomething(3000);
    console.log(result);
 }
 
 testasync();