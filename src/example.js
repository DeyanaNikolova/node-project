const fs = require('fs');
const path = require('path');

const p = path.join(__dirname, '..', 'data', 'hello.txt');

fs.writeFile(p, 'hello from example.js', err =>{
    console.log(err);   
}, ()=>{
    console.log('file modified with success');    
});

fs.readFile(p, (err, fileContent)=>{
    if(err){
        console.log(err);   
    } else{
        console.log(fileContent.toString());
    }
});