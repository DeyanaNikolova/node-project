const { isAuthenticated } = require('../util/auth');

module.exports.getUsersPage = (req, res, next) => {
    res.render('users', {
        pageTitle: 'Users Page',
        page: 'users',
        isAuthenticated: isAuthenticated(req),
    });
}