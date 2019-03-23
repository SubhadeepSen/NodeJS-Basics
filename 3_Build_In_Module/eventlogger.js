const EvenEmitter = require('events');

class EventLogger extends EvenEmitter{
    logEvent(messge){
        //console.log(messge);
        this.emit('eventLogger', messge);
    }
}

module.exports = EventLogger;