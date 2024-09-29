const http = require('http');
const { requestListener } = require('./routes');
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




http.createServer(requestListener).listen(3000, () => {
    console.log('Server is running on port 3000 ...');
});