const express = require('express');
const app = express();

console.log('Retrieving environment using process object... : ' + process.env.NODE_ENV);
console.log('Retrieving environment using app object... : ' + app.get('env'));  //defatult returns development

// handling environment and project sensitive information using config module
// when using this module, the name of the files defined in config folder are very important
const config = require('config');

console.log('\n.....using config module.....\n');
console.log('Name : ' + config.get('name'));
console.log('HOST : ' + config.get('mail.host'));
console.log('Password : ' + config.get('mail.password'));



