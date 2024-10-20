const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./util/database');
const User = require('./models/user-model');


const { welcomeRoutes } = require('./routes/welcome');
const { connectionRoutes } = require('./routes/connection');
const { loginRoutes } = require('./routes/login');
const { notFoundRoutes } = require('./routes/not-found');
const { productRoutes } = require('./routes/product');
const { usersRoutes } = require('./routes/users');
const { where } = require('sequelize');


const app = express();


app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/connection', connectionRoutes);
app.use('/login', loginRoutes);
app.use('/product*', productRoutes);
app.use('/users', usersRoutes);

app.use(welcomeRoutes);
// app.use('*', notFoundRoutes);

db.sync()
    .then(() => {
        return User.findAll({ where: { login: 'mariaPet' } })
    })
    .then(users => {
        if (users && users.length > 0) {
            return new Promise((resolve, _) => {
                resolve('User is already existing!');
            });
        }
        return User.create({ login: 'mariaPet', firstname: 'Maria', lastname: 'Petrova', role: 'ADMIN' });
    })
    .then(() => {
        app.listen(3000, () => {
            console.log('Server is running on port 3000 ...');
        });
    })
    .catch(err => { console.log(err) });

