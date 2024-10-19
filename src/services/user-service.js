const User = require('../models/user-model');

module.exports.getUserByLogin = (login, callback) => {
    User.getUserByLogin(login, user => {
      callback(user);
    });
}