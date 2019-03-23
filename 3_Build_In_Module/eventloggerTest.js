const EventLogger = require('./EventLogger');

const eventLogger = new EventLogger();

eventLogger.on('eventLogger', (message) => {
    console.log(message);
});

eventLogger.logEvent({id: 123, name: 'Subhadeep Sen'});