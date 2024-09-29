const connectionRoutes = (req, res)=>{
    res.write('<html>');
    res.write('<head><title>Connection</title></head><body>');
    res.write('<h2>Connection form:</h2>');
    res.write('<form method="POST" action="login"><div><label>Login</label><input type="text" name="login"/></div>');
    res.write('<div><label>Password</label><input type="password" name="password"/></div><button type="submit">Login</button></form>');
    res.write('</body></html>');
    res.end();
};

exports.connectionRoutes = connectionRoutes;