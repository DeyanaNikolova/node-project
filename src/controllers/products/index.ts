import { Request, Response } from 'express';
import Product, { ProductAttributes } from '../../models/product';
import { getConnectedUserId } from '../../util/auth';

export function getProducts(req: Request, res: Response): void {
  fetchProducts(req, res);
}

export function createProduct(req: Request, res: Response): void {
    const { title, price, amount } = req.body;
    const connectedUserId = getConnectedUserId(req);
  
    const newProduct: ProductAttributes = {
      title: title,
      price: price,
      amount: amount,
      userId: connectedUserId,
    };
    Product.create(newProduct)
      .then(() => {
        fetchProducts(req, res);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  }

export function updateProduct(req: Request, res: Response): void {
  const { title, price, amount } = req.body;

  Product.findOne({ where: { title: title } })
    .then((product: any) => {
      if (product) {
        product.price = price;
        product.amount = amount;
        return product.save();
      }
      return new Promise((_, reject) => {
        reject({message:'Product does not exist!'});
      });
    })
    .then(() => {
      fetchProducts(req, res);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
}

export function deleteProduct(req: Request, res: Response): void {
  const title = req.params.title;
 // res.setHeader('Content-Type', 'text/plain');

  Product.findOne({ where: { title: title } })
    .then((product: any) => {
      if (product) {
        return product.destroy();
      }
      return new Promise((_, reject) => {
        reject({message:'Product does not exist!'});
      });
    })
    .then(() => {
      res.status(204).end();
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json(err);
    });
}

function fetchProducts(req: Request, res: Response): void {
  const connectedUserId = getConnectedUserId(req);

  Product.findAll({ where: { userId: connectedUserId } })
    .then((products) => {
        res.json(products);
    //  isAdmin(req, isAdmin=> {
       
        // res.render('product', {
        //     products: products,
        //     pageTitle: 'Products Page',
        //     page: 'product',
        //     isAuthenticated: isAuthenticated(req),
        //     isAdmin: isAnAdmin,
        // });
    //  });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
}
