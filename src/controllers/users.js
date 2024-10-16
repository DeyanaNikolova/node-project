const User = require('../models/user-model');
const { isAuthenticated } = require('../util/auth');

module.exports.getUsersPage = (req, res) => {
    User.getUsers(data =>{
        res.render('users', {
            pageTitle: 'Users Page',
            page: 'users',
            users: data,
            isAuthenticated: isAuthenticated(req),
        });
    });
}

module.exports.getUserProfilePage = (req, res) => {
    res.render('user-profile', {
        pageTitle: 'User Profile Page',
        page: '',
        isAuthenticated: isAuthenticated(req),
    });
}


module.exports.addUser = (req, res) => {
    const {firstname, lastname, login } = req.body;
    const user = new User(firstname, lastname, login);

    // if(postAction === 'update'){
    //     res.statusCode = 200;
    //     product.update(()=>{
    //         Product.getProducts(data =>{
    //             res.render('product', {
    //                 products: data,
    //                 pageTitle: 'Products Page',
    //                 page: 'product',
    //                 isAuthenticated: isAuthenticated(req),
    //             });
    //         });
    //     });
    // } else {
        res.statusCode = 201;
        user.add(()=>{
            User.getUsers(data =>{
                res.render('users', {
                    users: data,
                    pageTitle: 'Users Page',
                    page: 'users', 
                    isAuthenticated: isAuthenticated(req),
                });
            });
        });
   // }  
}

module.exports.deleteUser = (req, res) => {
    const login = req.url.split('login=')[1];
    User.delete(login, ()=>{
        res.setHeader('Content-Type', 'text/plain');
        res.end('success');
    });
}