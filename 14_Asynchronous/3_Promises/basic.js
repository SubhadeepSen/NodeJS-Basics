// Simple promise
const p1 =  new Promise(function(resolve, reject){
    resolve({id: 1, name: 'John'});
});

p1.then(result => console.log(result));


const p2 =  new Promise(function(resolve, reject){
    //Here only one method can be called, for sucessfull operation resolve() method or for error reject() method
    //resolve({id: 1, name: 'John'});
    reject(new Error('Unable to fetch data...'));
});

p2.then(result => console.log(result))  // gets called when result is available
    .catch(err => console.log(err.message));    //gets called when there is an error