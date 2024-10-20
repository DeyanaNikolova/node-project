require('dotenv').config();
const Sequelize = require('sequelize');

const database = process.env.DB_DATABASE;
const user = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const host = process.env.DB_HOST;
const connection = process.env.DB_CONNECTION;

const db = new Sequelize(database, user, password, { 
    host: host, 
    dialect: connection 
});

module.exports = db;