const User = require('../models/user-model');

module.exports.getUserByLogin = (login) => {
  return  User.getUserByLogin(login, user => {
    });
}