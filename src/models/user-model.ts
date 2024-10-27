import { DataTypes } from 'sequelize';
import db from '../util/database';

const User = db.define('user', {
    login: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
    },
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    role: DataTypes.STRING,
});


export default User;






