const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '..', '..', 'data', 'products.json');

module.exports = class Product {

    constructor(title, price, amount) {
        this.title = title;
        this.price = price;
        this.amount = amount;
    }

    add() {
        const { title, price, amount } = this;

        readFile(data =>{
            if(!data.some(product => product.title === title)){
                data.push({ title, price, amount });
            } 
            writeFile(data);
        });
    }

    update() {
        const { title, price, amount } = this;

        // for (let p of products) {
        //     if (p.title === title) {
        //         p.price = price;
        //         p.amount = amount;
        //         break;
        //     }
        // }
    }

    static delete(title) {
        // products = products.filter(product => product.title !== title);
    }

    static getProducts(callback) {
        readFile(data =>{
          callback(data);
        });
    }
}

const writeFile = (product) =>{
    fs.writeFile(productsPath, JSON.stringify(product), err =>{
        console.log(err);   
    }, ()=>{
        console.log('product saved with success!');    
    });
}

const readFile = (callback) => {

   return fs.readFile(productsPath, (err, fileContent)=>{
        if(err){
            console.log(err);  
            callback([]);
        } else{
            callback(JSON.parse(fileContent));
        }
    });
}


