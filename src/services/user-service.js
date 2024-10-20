const User = require('../models/user-model');

module.exports.getUserByLogin = (login) => {
  return  User.findAll({where: {login: login}});
}