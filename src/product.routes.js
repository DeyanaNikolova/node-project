const productRoutes = (req, res) => {
    res.end(template);
};

const template  = `
<html>
    <head>
        <title>Product Page</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    </head>
    <body class="container">
         <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
             <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                 <li><a href="/" class="nav-link px-2 link-secondary">Home</a></li>
                 <li><a href="/product" class="nav-link px-2">Products</a></li>
            </ul>
            <div class="col-md-3 text-end">
                 <button type="button" class="btn btn-outline-primary me-2" onclick="login()">Logout</button>    
            </div>
        </header>
         <div>
             <h2>Hello from Product Page</h2>
        </div>
         <script>
        function login(){
            window.location.href = '/connection';
        }
        </script>
    </body>
</html>
`;

exports.productRoutes = productRoutes;