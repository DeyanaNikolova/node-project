const fs = require('fs');
const path = require('path');

const userPath = path.join(__dirname, '..', '..', 'data', 'users.json');

module.exports = class User {

    constructor(firstname, lastname, login) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.login = login;
    }

    add(callback) {
        const { firstname, lastname, login } = this;

        readFile(data =>{
            if(!data.some(user => user.login === login)){
                data.push({ firstname, lastname, login });
            } 
            writeFile(data, callback);
        });
    }

    update(callback) {
        const { firstname, lastname, login } = this;

        readFile(data =>{
            for (let user of data) {
                if (user.login === login) {
                    user.firstname = firstname;
                    user.lastname = lastname;
                    break;
                }
            }
            writeFile(data, callback);
        });
    }

    static delete(login, callback) {
        readFile(data =>{
           data = data.filter(user => user.login !== login);
            writeFile(data, callback);
        });
    }

    static getUsers(callback) {
        readFile(data =>{
          callback(data);
        });
    }
}

const writeFile = (user, callback) =>{
    fs.writeFile(userPath, JSON.stringify(user), err =>{
        console.log(err);   
    }, ()=>{
        callback('user saved with success!');    
    });
}

const readFile = (callback) => {
   return fs.readFile(userPath, (err, fileContent)=>{
        if(err){
            console.log(err);  
            callback([]);
        } else{
            callback(JSON.parse(fileContent));
        }
    });
}


