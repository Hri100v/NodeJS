const http = require('http');

http
    .createServer((request, response) => {
        response.write('Hello World!');
        response.end();
    })
    .listen(5000, () => { console.log('Server running...'); });
