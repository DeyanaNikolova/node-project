import express from "express";

import bodyParser from 'body-parser';
import path from 'path';
import db from './util/database';
import User from './models/user-model';
import Product from './models/product-model';


import { welcomeRoutes } from './routes/welcome';
import { connectionRoutes } from './routes/connection';
import { loginRoutes } from './routes/login';
// import{ notFoundRoutes } from './routes/not-found';
import { productRoutes } from './routes/product';
import { usersRoutes } from './routes/users';



const app = express();


app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/connection', connectionRoutes);
app.use('/login', loginRoutes);
app.use('/product', productRoutes);
app.use('/users', usersRoutes);
app.use(welcomeRoutes);
// app.use('*', notFoundRoutes);

Product.belongsTo(User);

db.sync()
    .then(() => {
        return User.findAll({ where: { login: 'mariaPet' } })
    })
    .then((users: any) => {
        if (users || users.length > 0) {
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
    .catch((err: any) => { console.log(err) });

