const notFoundRoutes = (req, res)=>{
    res.write('<html>');
    res.write('<head><title>Not Found</title></head>');
    res.write('<body><h2>Page Not Found!</h2></body>');
    res.write('</html>');
    res.statusCode = 404;
    res.end();
};

exports.notFoundRoutes = notFoundRoutes;