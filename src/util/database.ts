import * as dotenv from 'dotenv';
dotenv.config();


import { Sequelize } from 'sequelize';



const database = process.env.DB_DATABASE as string;
const user = process.env.DB_USERNAME as string;
const password = process.env.DB_PASSWORD;
const host = process.env.DB_HOST;
// const connection = process.env.DB_CONNECTION;

const db = new Sequelize(database, user, password, { 
    host: host, 
    dialect: 'mysql' 
});

export default db;