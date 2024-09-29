const welcomeRoutes = (req, res)=>{
    res.write('<html>');
    res.write('<head><title>Welcome Page</title></head><body>');
    res.write('<h2>Hello from server!</h2>');
    res.write('</body></html>');
    res.end();
};

exports.welcomeRoutes = welcomeRoutes;
