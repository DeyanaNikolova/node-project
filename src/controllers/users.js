const { isAuthenticated } = require('../util/auth');

module.exports.getUsersPage = (req, res) => {
    res.render('users', {
        pageTitle: 'Users Page',
        page: 'users',
        users: [{firstname: 'Alex', lastname: 'Doe', login: 'alexDoe'}],
        isAuthenticated: isAuthenticated(req),
    });
}

module.exports.getUserProfilePage = (req, res) => {
    res.render('user-profile', {
        pageTitle: 'User Profile Page',
        page: '',
        isAuthenticated: isAuthenticated(req),
    });
}