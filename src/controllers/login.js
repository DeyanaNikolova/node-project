const { isUserExists } = require('../util/auth');

module.exports.signIn = (req, res)=>{
    const { login, password } = req.body;

    if (isUserExists(login)) {
        res.cookie('isAuthenticated', true);
        res.cookie('login', login);

        res.redirect(302, '/product');
    } else {
        res.cookie('isAuthenticated', false);
        res.cookie('login', '');

        res.redirect(302, '/connection');
    }

    res.end();
}