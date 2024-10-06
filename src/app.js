const express = require('express');
const app = express();

const { welcomeRoutes } = require('./welcome.routes');
const { connectionRoutes } = require('./connection.routes');
const { loginRoutes } = require('./login.routes');
const { notFoundRoutes } = require('./not-founf.routes');
const { productRoutes } = require('./product.routes');


app.use('/connection', connectionRoutes);
app.use('/login', loginRoutes);
app.use('/product*', productRoutes);
app.use(welcomeRoutes);
app.use('*', notFoundRoutes);



app.listen(3000, () => {
    console.log('Server is running on port 3000 ...');
});