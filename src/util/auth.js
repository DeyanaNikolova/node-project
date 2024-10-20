const { getUserByLogin } = require('../services/user-service');

module.exports.isAuthenticated = (req) => {
    return extractCookies(req.get('Cookie')).isAuthenticated === 'true';
}

module.exports.getConnectedUserLogin = (req) => {
    return extractCookies(req.get('Cookie')).login;
}

module.exports.isUserExists = (login, callback) => {
    getUserByLogin(login).then(users => {
        if (users && users.length > 0) {
            callback(true);
        } else {
            callback(false);
        }
    })
        .catch(err => { console.log(err) });
}


module.exports.isAdmin = (req, callback) => {
    const login = this.getConnectedUserLogin(req);

    getUserByLogin(login).then(users => {
        if (users && users[0] && users[0].role === 'ADMIN') {
            callback(true);
        } else {
            callback(false);
        }
    })
        .catch(err => { console.log(err) });
}

module.exports.isAdminConnected = (req, res, next) => {
    const login = this.getConnectedUserLogin(req);
    getUserByLogin(login).then(users => {
        if (users && users[0] && users[0].role === 'ADMIN') {
            next();
        } else {
            res.render('error', {
                pageTitle: 'Error Page',
                page: '',
                user: users && users[0],
                isAuthenticated: extractCookies(req.get('Cookie')).isAuthenticated === 'true',
                isAdmin: false,
            });
        }
    })
    .catch(err =>{console.log(err)});
}

const extractCookies = (cookiesStr) => {
    const cookiesObj = {};
    try {
        cookiesStr.split(';').map(c => c.trim()).forEach(c => {
            const key = c.split('=')[0];
            const value = c.split('=')[1];
            cookiesObj[key] = value;
        });
    } catch (err) {
        console.log(err);  
    }
    return cookiesObj;
}

