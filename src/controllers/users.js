const User = require('../models/user-model');
const { isAuthenticated, getConnectedUserLogin } = require('../util/auth');

module.exports.getUsersPage = (req, res) => {
 getUsers(req, res);
}

module.exports.getUserProfilePage = (req, res) => {
    User.getUserByLogin(getConnectedUserLogin(req), user => {
        res.render('user-profile', {
            pageTitle: 'User Profile Page',
            page: '',
            user: user,
            isAuthenticated: isAuthenticated(req),
        });
    });
}


module.exports.addUser = (req, res) => {
    const { firstname, lastname, login, role, postAction } = req.body;
    const user = new User(firstname, lastname, login, role);

    if (postAction === 'update') {
        res.statusCode = 200;
        user.update(() => {
         getUsers(req, res);
        });
    } else {
        res.statusCode = 201;
        user.add(() => {
         getUsers(req, res);
        });
    }
}

const getUsers = (req, res)=>{
    User.getUsers(data => {
        res.render('users', {
            users: data,
            pageTitle: 'Users Page',
            page: 'users',
            isAuthenticated: isAuthenticated(req),
        });
    });
}

module.exports.deleteUser = (req, res) => {
    const login = req.url.split('login=')[1];
    User.delete(login, () => {
        res.setHeader('Content-Type', 'text/plain');
        res.end('success');
    });
}

