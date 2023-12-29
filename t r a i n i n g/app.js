const http = require('http');
const server = http.createServer((request, response) => {
    if (request.url === '/') {
        response.write('Hello World');
        response.end();
    }

    if (request.url === '/api/courses') {
        response.write(JSON.stringify([1, 2, 3, 4]));
        response.end();
    }
});

server.listen(3003);
console.log('Listening on port 3003...');
