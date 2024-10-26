import { DataTypes } from 'sequelize';
import  db from '../util/database';

const Product = db.define('products', {
    title: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
    },
    price: DataTypes.DOUBLE,
    amount: DataTypes.INTEGER,
});

export default Product;

