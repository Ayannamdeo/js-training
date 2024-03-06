// Create a function that fetches data from multiple APIs in parallel and then performs some operation on the combined data, using async/await.

async function fetchData() {
    try {
        const [response1, response2, response3] = await Promise.all([
            fetch('https://jsonplaceholder.typicode.com/posts/1'),
            fetch('https://jsonplaceholder.typicode.com/posts/2'),
            fetch('https://jsonplaceholder.typicode.com/posts/3')
        ]);

        const data1 = await response1.json();
        const data2 = await response2.json();
        const data3 = await response3.json();

        const mergedData = {
            data1: data1,
            data2: data2,
            data3: data3
        };

        return mergedData;
    } catch (error) {
        throw error;
    }
 }
 
 fetchData()
    .then(data => {
        const arr = [];
        for(let key in data){
            arr.push(data[key].title)
        }
        console.log(arr)})
    .catch(error => console.error(error));