const requestListener = (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    if (req.url === '/') {
        res.write('<html>');
        res.write('<head><title>Welcome Page</title></head>');
        res.write('<body><h2>Hello from server!</h2></body>');
        res.write('</html>');
    } else if (req.url === '/connection') {
        res.write('<html>');
        res.write('<head><title>Connection</title></head><body>');
        res.write('<h2>Connection form:</h2>')
        res.write('<form method="POST" action="login"><div><label>Login</label><input type="text" name="login"/></div>');
        res.write('<div><label>Password</label><input type="password" name="password"/></div><button type="submit">Login</button></form>');
        res.write('</body></html>');
    } else if (req.url === '/login' && req.method === 'POST') {
        res.statusCode = 302;
        res.setHeader('Location', '/');
    } else {
        res.write('<html>');
        res.write('<head><title>Not Found Page</title></head>');
        res.write('<body><h2>Page Not Found!</h2></body>');
        res.write('</html>');
        res.statusCode = 404;
    }
    res.end();
}

module.exports.requestListener = requestListener;
