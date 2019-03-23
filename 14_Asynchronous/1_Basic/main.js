// Synchronous Javascript
console.log('Before');
console.log('After');


// Asynchronous Javascript
console.log('Before');
setTimeout(() => {
    console.log('Reading data from database');  // This piece of code will be executes after 2 sec
}, 2000);
console.log('After');


// Asynchronous Javascript
console.log('Before');
const user = getUser(1);
console.log(user);  // here user is undefined as the function will be executed after 2 sec
console.log('After');

function getUser(id){       // This is not the right way to retrieve user details using asynchronous programming
    setTimeout(() => {
        console.log('Reading user details from database');
        return {id: id, name: 'John'};
    }, 2000);
}

/*
Dealing with asynchronous programming:
1.  Callbacks
2.  Promises
3.  async / await   -syntactical sugar on promises
*/