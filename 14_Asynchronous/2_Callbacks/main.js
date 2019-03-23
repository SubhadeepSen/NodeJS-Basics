console.log('Before');
getUser(1, function(user) { // This function is known as Callback function and this function will be invoked when data is available
    console.log('user', user);
});

console.log('After');

// getUser function, which takes id and callback function as parameters
function getUser(id, callback){
    setTimeout(() => {
        console.log('Reading user details from database');
        callback({id: id, name: 'John'});   // invoking the callback function
    }, 2000);
}