const { DataTypes } = require('sequelize');
const db = require('../util/database');

const Users = db.define('users', {
    login: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
    },
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    role: DataTypes.STRING,
});

module.exports = Users;






