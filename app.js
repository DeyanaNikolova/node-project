const http = require('http');

// const server = http.createServer((req, res) =>{
//     res.statusCode = 200;
//     res.setHeader('Content-type', 'text/plain');
//     res.end('Hello World!');
// });

// const port = 3000;
// const hostName = 'localhost'

// server.listen(port, hostName, ()=>{
//     console.log(`Server is running at http://${hostName}:${port}`);  
// })

http.createServer((req, res)=>{
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Welcome Page</title></head>');
    res.write('<body><h2>Hello from server!</h2></body>');
    res.write('</html>');
    res.end();
    console.log('Server is running');
}).listen(3000);