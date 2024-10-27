import { Model, DataTypes } from 'sequelize';

class Product extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */

  static associate(models: any) {
    Product.belongsTo(models.User);
  }
}

module.exports.init = (sequelize: any) => {
 
  Product.init({
    title: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    amount: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};

export default Product;
