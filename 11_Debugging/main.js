const express = require('express');
const app = express();

/*
the debug module takes an arbitrary namespace for the debugger. The DEBUG environment variable
can be set to any of these namespace to enable the debugger.
*/
const debug = require('debug')('app:startup');
const dbDebug = require('debug')('app:db');

if(app.get('env') === 'development'){
    debug('start up debugger enabled...');
}

if(app.get('env') === 'production'){
    dbDebug('database debugger enabled, connected to DB...');
}



