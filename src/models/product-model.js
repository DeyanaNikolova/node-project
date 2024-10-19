const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '..', '..', 'data', 'products.json');

module.exports = class Product {

    constructor(title, price, amount, creatorLogin) {
        this.title = title;
        this.price = price;
        this.amount = amount;
        this.creatorLogin = creatorLogin;
    }

    add(callback) {
        const { title, price, amount, creatorLogin } = this;

        readFile(data =>{
            if(!data.some(product => product.title === title)){
                data.push({ title, price, amount, creatorLogin });
            } 
            writeFile(data, callback);
        });
    }

    update(callback) {
        const { title, price, amount, creatorLogin } = this;

        readFile(data =>{
            for (let p of data) {
                if (p.title === title) {
                    p.price = price;
                    p.amount = amount;
                    p.creatorLogin = creatorLogin;
                    break;
                }
            }
            writeFile(data, callback);
        });
    }

    static delete(title, callback) {
        readFile(data =>{
           data = data.filter(product => product.title !== title);
            writeFile(data, callback);
        });
    }

    static getProducts(callback) {
        readFile(data =>{
          callback(data);
        });
    }
}

const writeFile = (product, callback) =>{
    fs.writeFile(productsPath, JSON.stringify(product), err =>{
        console.log(err);   
    }, ()=>{
        callback('product saved with success!');    
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


