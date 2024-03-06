// Convert a callback-based API to a Promise-based API 

function fetchData(){
   const url = 'https://jsonplaceholder.typicode.com/posts';
   return new Promise((resolve, reject) => {
       fetch(url)
       .then(response => {
           return response.ok ? response.json() : new Error('failed to fetch data');
       })
       .then(data => {
           setTimeout(() => {
               resolve(data);
           }, 2000);
       })
       .catch(error => {
           reject(error);
       })
   });
}


fetchData()
       .then(data => console.log('data fetched successfully; ', data[0]))
       .catch(error => console.error('error: ', error));




// function fetchData(callback){
//     const url = 'https://jsonplaceholder.typicode.com/posts';


//     fetch(url)
//         .then(response => {
//             return response.ok ? response.json() : Error('failed to fetch data');
//         })
//         .then(data => {
//             setTimeout(() => {
//                 callback(null, data);
//                 // console.log(data);
//             }, 2000);
//         })
//         .catch(error => {
//             callback(error, null);
//         })
// }


// function handle(error, data){
//     if(error){
//         console.error('error fetching data: ', error);
//     } else {
//         console.log('data fetched successfully: ', data[0]);
//     }
// }


// fetchData(handle);
