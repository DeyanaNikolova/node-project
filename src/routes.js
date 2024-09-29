const requestListener = (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    if (req.url === '/') {
        res.write('<html>');
        res.write('<head><title>Welcome Page</title></head><body>');
        res.write('<h2>Hello from server!</h2>');
        res.write('</body></html>');
        res.end();
    } else if (req.url === '/connection') {
        res.write('<html>');
        res.write('<head><title>Connection</title></head><body>');
        res.write('<h2>Connection form:</h2>');
        res.write('<form method="POST" action="login"><div><label>Login</label><input type="text" name="login"/></div>');
        res.write('<div><label>Password</label><input type="password" name="password"/></div><button type="submit">Login</button></form>');
        res.write('</body></html>');
        res.end();
    } else if (req.url === '/login' && req.method === 'POST') {
        res.statusCode = 302;
        const data = [];
        req.on('data', (chunck) => {
            data.push(chunck);
        });
        req.on('end', () => {
            const parsedData = Buffer.concat(data).toString();
            const { login, password } = parseConnectionData(parsedData);
            if(login === 'Alex' && password === '123'){
                res.setHeader('Location', '/');
            } else{
                res.setHeader('Location', '/connection');
            }
            res.end();
        });
        
    } else {
        res.write('<html>');
        res.write('<head><title>Not Found</title></head>');
        res.write('<body><h2>Page Not Found!</h2></body>');
        res.write('</html>');
        res.statusCode = 404;
        res.end();
    }
}

const parseConnectionData = parsedData => {
    const list = parsedData.split('&');
    const login = list[0].split('=')[1];
    const password = list[1].split('=')[1];
    return { login, password };
}

module.exports.requestListener = requestListener;
