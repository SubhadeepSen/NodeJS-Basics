const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Asynchronous operation 1...');
        resolve(1);
    }, 2000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Asynchronous operation 2...');
        //resolve(2);
        reject(new Error('Unable to perform asynchronous operation 2'))
    }, 2000);
});

/*
const p = Promise.all([p1, p2]);
p.then(result => console.log(result))
 .catch(err => console.log(err.message));
 */

Promise.all([p1, p2])
    .then(result => console.log(result))    // holds a result array with all responses
    .catch(err => console.log(err.message));    // if any promise fails, results an error