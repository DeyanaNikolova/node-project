let products = [
    { title: 'T1', price: '12', amount: '3' },
    { title: 'T2', price: '32', amount: '5' },
    { title: 'T3', price: '6', amount: '12' }
];


module.exports = class Product {

    constructor(title, price, amount) {
        this.title = title;
        this.price = price;
        this.amount = amount;
    }

    add() {
        const { title, price, amount } = this;
        if (!products.some(product => product.title === title)) {
            products.push(title, price, amount);
        }
    }

    update() {
        const { title, price, amount } = this;

        for (let p of products) {
            if (p.title === title) {
                p.price = price;
                p.amount = amount;
                break;
            }
        }
    }

    static delete(title) {
        products = products.filter(product => product.title !== title);
    }

    static getProducts() {
        return products;
    }
}


