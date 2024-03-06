// Give an example of using a callback function to handle an asynchronous operation in JavaScript (Use any open api to make a call)

function Fetchsomething(indicator){
    const url = `https://jsonplaceholder.typicode.com/posts`;
    indicator(false, null);
    
    fetch(url)
    .then(response => {
        if (!response.ok){
            throw new Error("failed to fetch user data");
        } else {
            return response.json();
        }
    })
    .then(data => {
        indicator(true, data);
})
    .catch(error =>{
      console.error(error);
    } )
}

function indicator(bool, data){
		if (bool){
    console.log('loading completed -');
    setTimeout(() => console.log('fetched data is : ', data[0]), 3000);
    
    } else {
    console.log('loading....') ;
    }}

Fetchsomething(indicator);
