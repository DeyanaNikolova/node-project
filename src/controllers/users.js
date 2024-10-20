const User = require('../models/user-model');
const { isAuthenticated, getConnectedUserLogin, isAdmin } = require('../util/auth');

module.exports.getUsersPage = (req, res) => {
    getUsers(req, res);
}

module.exports.getUserProfilePage = (req, res) => {
    User.getAll({where: {login: getConnectedUserLogin(req)}})
    .then(users =>{
        res.render('user-profile', {
            pageTitle: 'User Profile Page',
            page: '',
            user: users && users[0],
            isAuthenticated: isAuthenticated(req),
            isAdmin: users && users[0] && users[0].role === 'ADMIN',
        });
    })
}

module.exports.addUser = (req, res) => {
    const { firstname, lastname, login, role, postAction } = req.body;

    if (postAction === 'update') {
        res.statusCode = 200;

        User.findAll({ where: { login: login } })
        .then(users => {
            if (users && users.lenght > 0) {
                users[0].firstname = firstname;
                users[0].lastname = lastname;
                users[0].role = role;
                return users[0].save();
            }
            return new Promise((_, reject) => {
                reject('User does not exist!')
            });
        })
        .then(() => {
            getUsers(req, res);
        })
        .catch(err => { console.log(err) });
    } else {
        res.statusCode = 201;
        User.create({ firstname, lastname, login, role })
        .then(() => {
            getUsers(req, res);
        })
        .catch(err => { console.log(err) });
    }
}

module.exports.deleteUser = (req, res) => {
    const login = req.url.split('login=')[1];
    res.setHeader('Content-Type', 'text/plain');

    User.findAll({ where: { login: login } })
        .then(users => {
            if (users && users.lenght > 0) {
                return users[0].destroy();
            }
            return new Promise((_, reject) => {
                reject('User does not exist!')
            });
        })
        .then(() => {
            res.statusCode = 200;
            res.end('success');
        })
        .catch(err => {
            console.log(err);
            res.statusCode = 404;
            res.end(err.message);
        });
}

const getUsers = (req, res) => {
    User.findAll()
    .then((users) => {
        isAdmin(req, isAnAdmin => {
            res.render('users', {
                users: users,
                pageTitle: 'Users Page',
                page: 'users',
                isAuthenticated: isAuthenticated(req),
                isAdmin: isAnAdmin,
            });
        });
    })
    .catch(err => { console.log(err) });
}

