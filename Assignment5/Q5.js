// Write a program flattenObject that takes an object with nested properties and returns a flat object with the nested properties transformed into dot-separated properties. The function should handle nested objects and arrays.
// const obj = {
//    a: 1,
//    b: { c: 2, d: [3, 4] }
// };
// Output: { 'a': 1, 'b.c': 2, 'b.d.0': 3, 'b.d.1': 4 }

const obj = {
    a: 1,
    b: {
        c: 2,
        d: [3,4]
    }
};

function flattenObject(obj){
    let flatObj = {};
    
    function flatten(obj, parentkey = ''){
        for (let key in obj){
            let newkey = parentkey ? `${parentkey}.${key}` : key;

            if ( typeof obj[key] === 'object' && !Array.isArray(obj[key])){
                flatten(obj[key], newkey);
            } else if(Array.isArray(obj[key])){
                for(let i in obj[key]){
                    let temp = `${newkey}.${i}`;
                    flatObj[temp] = obj[key][i];
                }
            } else {
                flatObj[newkey] = obj[key];
            }
        }
    }
    
    flatten(obj);
    return flatObj;
}

const result = flattenObject(obj);
console.log(result);
