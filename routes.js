const requestListener = (req, res)=>{
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Welcome Page</title></head>');
    res.write('<body><h2>Hello from server!</h2></body>');
    res.write('</html>');
    res.end();
}

module.exports.requestListener = requestListener;
