const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('loggingEvent', function(message) {
    console.log('logging event...');
    console.log(message);
});

emitter.emit('loggingEvent', {id: 1, name: 'Subhadeep Sen'});   