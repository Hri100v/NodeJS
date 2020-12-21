const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((request, response) => {
    // if (request.url === '/') {
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), (error, content) => {
    //         if (error) throw error;

    //         response.writeHead(200, { 'Content-Type': 'text/html' });
    //         response.end(content);
    //     });
    // }

    // if (request.url === '/api/users') {
    //     const users = [
    //         { name: 'Bob Smith', age: 40 },
    //         { name: 'John Doe', age: 30 }
    //     ];

    //     response.writeHead(200, { 'Content-Type': 'application/json' });
    //     response.end(JSON.stringify(users));
    // }

    // Build file path
    const filePath = path.join(__dirname, 'public', request.url === '/' ? 'index.html' : request.url);

    // console.log(filePath);
    // response.end();

    // Extension of file
    let extname = path.extname(filePath);

    // Initial content type
    let contentType = 'text/html';

    // Check extension type and set content type
    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }

    // Read file
    fs.readFile(filePath, (error, content) => {
        if (error) {
            if (error.code === 'ENOENT') {
                // Page not found
                fs.readFile(path.join(__dirname, 'public', '404.html'), (error, content) => {
                    if (error) throw error;
                    
                    response.writeHead(200, { 'Content-Type': 'text/html' });
                    response.end(content, 'utf8');
                });
            } else {
                // Some server error
                response.writeHead(500);
                response.end(`Server Error: ${error.code}`);
            }
        } else {
            // Succsess
            response.writeHead(200, { 'Content-Type': contentType });
            response.end(content, 'utf8');            
        }
    })
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
