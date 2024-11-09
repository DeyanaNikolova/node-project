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
    title: {
      type: DataTypes.STRING,
      validate: {
        len:[2, 25]
      }
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};

export default Product;
