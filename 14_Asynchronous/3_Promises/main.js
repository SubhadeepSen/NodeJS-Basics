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


console.log('\n...Solution for callback hell...\n');
// Soltuion for Callback Hell problem
function getUser(id){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Reading user details from database...'); 
            resolve({id: 1, name: 'John'});
        }, 2000);
    });
}

function getRepositories(username){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Retrieving repositories...');
            resolve(['Repo 1', 'Repo 2', 'Repo 3']);
        }, 2000);
    });
}

function getCommits(repo){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Retrieving commits...');
            resolve(['Commit 1', 'Commit 2']);    // swap the comment and check the result
            //reject(new Error('Unable to fetch commits...'));
        }, 2000);
    });
}

console.log('Before');

//Chaining of Pomises
getUser(1).then(user => getRepositories(user.name))
          .then(repos => getCommits(repos[0]))
          .then(commits => console.log(commits))
          .catch(err => console.log(err.message));

console.log('After');