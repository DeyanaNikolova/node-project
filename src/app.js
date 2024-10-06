const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { engine } = require('express-handlebars');


const { welcomeRoutes } = require('./routes/welcome');
const { connectionRoutes } = require('./routes/connection');
const { loginRoutes } = require('./routes/login');
const { notFoundRoutes } = require('./routes/not-found');
const { productRoutes } = require('./routes/product');

const app = express();

app.engine('hbs', engine({defaultLayout: 'main', extname: 'hbs'}));
app.set('view engine', 'hbs');
app.set('views', './src/views');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/connection', connectionRoutes);
app.use('/login', loginRoutes);
app.use('/product*', productRoutes);
app.use(welcomeRoutes);
// app.use('*', notFoundRoutes);


app.listen(3000, () => {
    console.log('Server is running on port 3000 ...');
});