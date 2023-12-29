const EventEmitter = require('events');

var url = 'http://';

class Logger extends EventEmitter {
    log(message) {
        console.log(message);

        this.emit('messageLog', { id: 1, url: url });
    }
}

module.exports = Logger;