import express from 'express';

import bodyParser from 'body-parser';
import path from 'path';
import db from './util/database';

import  welcomeRouter from './routes/welcome';
import  connectionRouter  from './routes/connection';
import  loginRouter  from './routes/login';
import  productRouter  from './routes/products';
import  usersRouter  from './routes/users';

import User from './models/user-model';
import Product from './models/product-model';

const app = express();

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/connection', connectionRouter);
app.use('/login', loginRouter);
app.use('/product', productRouter);
app.use('/users', usersRouter);
app.use(welcomeRouter);

Product.belongsTo(User);

db.sync()
    .then(() =>  User.findAll({ where: { login: 'mariaPet' }}))
    .then((users: any[]) => {
        if (!users || users.length <= 0) {
            return User.create({ login: 'mariaPet', firstname: 'Maria', lastname: 'Petrova', role: 'ADMIN' });     
        }
        return new Promise((resolve)=>{resolve('User found.');});
    })
    .then(() => {
        app.listen(3000, () => {
            console.log('Server is running on port 3000 ...');
        });
    })
    .catch((err: string) => { console.log(err);});

