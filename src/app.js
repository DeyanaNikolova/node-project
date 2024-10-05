const http = require('http');

const { welcomeRoutes } = require('./welcome.routes');
const { connectionRoutes } = require('./connection.routes');
const { loginRoutes } = require('./login.routes');
const { notFoundRoutes } = require('./not-founf.routes');
const { productRoutes } = require('./product.routes');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');

    if (req.url === '/') {
        welcomeRoutes(req, res);
    } else if (req.url === '/connection') {
        connectionRoutes(req, res);
    } else if (req.url === '/login') {
        loginRoutes(req, res);
    } else if (req.url.startsWith('/product')) {
        productRoutes(req, res);
    } else {
        notFoundRoutes(req, res);
    }
});

server.listen(3000, () => {
    console.log('Server is running on port 3000 ...');
});