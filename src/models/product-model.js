const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '..', '..', 'data', 'products.json');

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
    writeFile(product){
        fs.writeFile(productsPath, JSON.stringify(product), err =>{
            console.log(err);   
        }, ()=>{
            console.log('product saved with success!');    
        });
    }

    readFile(){
        fs.readFile(p, (err, fileContent)=>{
            if(err){
                console.log(err);   
            } else{
                console.log(fileContent.toString());
            }
        });
    }

    add() {
        const { title, price, amount } = this;

        this.writeFile({ title, price, amount });

        if(!products.some(product => product.title === title)){
            products.push({ title, price, amount });
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
        // this.readFile(data =>{
        //   calback(data);
        // });
        return products;
    }
}


