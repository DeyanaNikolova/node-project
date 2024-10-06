const express = require('express');
const router = express.Router();

router.post('/', (req, res)=>{
    res.statusCode = 201;
    const { title, price, amount, postAction } = req.body;
    if (!products.some(product => product.title === title)) {
        products.push({ title, price, amount });
    } else if (postAction === 'update') {
        products.forEach(product => {
            if (product.title === title) {
                product.price = price;
                product.amount = amount;
            }
        });
    }
    res.render('product', {products: products});
});

router.delete('/', (req, res)=>{
    const title = req.url.split('title=')[1];
    products = products.filter(product => product.title !== title);
    res.setHeader('Content-Type', 'text/plain')
    res.end('success');
});

router.get('/', (req, res)=>{
    res.render('product', {products: products});
});


let products = [
    { title: 'T1', price: '12', amount: '3' },
    { title: 'T2', price: '32', amount: '5' },
    { title: 'T3', price: '6', amount: '12' }
];

exports.productRoutes = router;