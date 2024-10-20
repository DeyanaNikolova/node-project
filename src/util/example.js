const db = require('./database');

db.execute('SELECT * FROM products')
.then(([rows, fields]) =>{
    console.log(rows); 
    db.end();
})
.catch(err =>{
    console.log(err);  
    db.end();
});

