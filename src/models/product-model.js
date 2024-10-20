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
    creatorLogin: DataTypes.STRING,
});

module.exports = Product;


// const productsPath = path.join(__dirname, '..', '..', 'data', 'products.json');


// module.exports = class Product {

//     constructor(title, price, amount, creatorLogin) {
//         this.title = title;
//         this.price = price;
//         this.amount = amount;
//         this.creatorLogin = creatorLogin;
//     }

//     add() {
//         const { title, price, amount, creatorLogin } = this;
//         return db.execute('INSERT INTO products (title, price, amount, creatorLogin) values (?, ?, ?, ?)', [title, price, amount, creatorLogin]);
//     }

//     update() {
//         const { title, price, amount } = this;
//         return db.execute('UPDATE products SET price=?, amount=? WHERE title=?', [price, amount, title]);
//     }

//     static delete(title) {
//        return db.execute('DELETE FROM products WHERE title=?', [title]);
//     }

//     static getProducts(creatorLogin) {
//         return db.execute('SELECT * FROM products WHERE products.creatorLogin = ?', [creatorLogin]);
//     }
// }


