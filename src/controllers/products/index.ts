import { Request, Response } from 'express';
import Product from '../../../models/product';
import { isAuthenticated, isAdmin, getConnectedUserId } from '../../util/auth';

export function getProducts(req: Request, res: Response): void{
    fetchProducts(req, res);
}

export function addProduct(req: Request, res: Response): void{
    const { title, price, amount, postAction } = req.body;
    const connectedUserId = getConnectedUserId(req);

    if (postAction === 'update') {
        res.statusCode = 200;
        
        Product.findOne({ where: { title: title } })
            .then((product: any) => {
                if (product) {
                    product.price = price;
                    product.amount = amount;
                    return product.save();
                }
                return new Promise((_, reject) => {
                    reject('Product does not exist!');
                });
            })
            .then(() => {
                fetchProducts(req, res);
            })
            .catch(err => { console.log(err);});
    } else {
        res.statusCode = 201;
        
        Product.create({ title, price, amount, userId: connectedUserId })
            .then(() => {
                fetchProducts(req, res);
            })
            .catch(err => { console.log(err);});
    }
}

export function deleteProduct(req: Request, res: Response): void {
    const title = req.params.title;
    res.setHeader('Content-Type', 'text/plain');

    Product.findOne({ where: { title: title } })
        .then((product: any) => {
            if (product) {
                return product.destroy();
            }
            return new Promise((_, reject) => {
                reject('Product does not exist!');
            });
        })
        .then(() => {
            res.statusCode = 200;
            res.end('Product deleted with success!');
        })
        .catch(err => {
            console.log(err);
            res.statusCode = 404;
            res.end(err.message);
        });
}

function fetchProducts(req: Request, res: Response): void{
    const connectedUserId = getConnectedUserId(req);
 
    Product.findAll({ where: { userId: connectedUserId } })
        .then((products) => {
            isAdmin(req, isAnAdmin => {
                res.render('product', {
                    products: products,
                    pageTitle: 'Products Page',
                    page: 'product',
                    isAuthenticated: isAuthenticated(req),
                    isAdmin: isAnAdmin,
                });
            });
        })
        .catch(err => { console.log(err);});
}     
