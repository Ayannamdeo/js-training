// Create a function that performs multiple asynchronous operations in parallel using async/await and waits for all of them to complete before returning the results.

async function PerformAsyncTask(tasks){
    try{
            const result = await Promise.all(tasks.map(task => task()));
            return result;
        } catch(error){
            return error;
        }
    }

 const task1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=> resolve('Task1 is completed'), 2000);
    });
 };
 const task2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=> resolve('Task2 is completed'), 3000);
    });
 };
 const task3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=> resolve('Task3 is completed'), 5000);
    });
 };
 
PerformAsyncTask([task1, task2, task3])
    .then(results => {
        console.log("All async operations completed successfully!");
        console.log("Results:", results);
    })
    .catch(error => {
        console.error("Error occurred:", error);
    });
 