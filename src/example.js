const express = require('express');

const app = express();

app.use('/first', (req, res, next)=>{
    console.log('first');
   // res.end('first');   
    next();
});

app.use('/second', (req, res, next)=>{
    console.log('second');
    res.end('second');   
});

app.use((req, res, next)=>{
    console.log('root');
    res.end('root');   
});

app.listen(3000, () => {
    console.log('Server is running by express.js');   
});