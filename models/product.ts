import { Model, DataTypes } from 'sequelize';

export interface ProductAttributes{
  id?: number;
  title: string;
  price: number;
  amount: number;
  userId?: number;
}

class Product extends Model<ProductAttributes> implements ProductAttributes{
 
  title!: string;
  price!: number;
  amount!: number;
  userId?: number;

  static associate(models: any) {
    Product.belongsTo(models.User);
  }
}

module.exports.init = (sequelize: any) => {
 
  Product.init({
    title: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    amount: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};

export default Product;
