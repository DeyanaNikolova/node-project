const { DataTypes } = require('sequelize');
const db = require('../util/database');

const Product = db.define('products', {
    title: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
    },
    price: DataTypes.DOUBLE,
    amount: DataTypes.INTEGER,
});

module.exports = Product;

