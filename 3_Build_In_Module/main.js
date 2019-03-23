//Built in Path Module
const path = require('path');
console.log('\nPath: ', __filename);    //returns complete path
const parsedPath = path.parse(__filename);  //returns path object
console.log('\nParsed Path: ', parsedPath);

//Built in OS Module
const os = require('os');
const freeMemory = os.freemem();
const totalMemory = os.totalmem();
console.log(`\nFree Memory: ${freeMemory}`);
console.log(`Total Memory: ${totalMemory}`);

//Built in FS Module
const fs = require('fs');
const currentDir = fs.readdirSync('./');    //Synchronous
console.log('\n', currentDir);

fs.readdir('./', function(err, files){      //Every async function takes callback function as an argument
    if(err){
        console.log('\nError ', err);
    }
    else{
        console.log('\nAsync ', files);
    }
});

fs.readdir('', (err, files) => {      //ES6 Arrow function
    if(err){
        console.log('\nError ', err);
    }
    else{
        console.log('\nAsync ', files);
    }
});