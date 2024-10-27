import { Model, DataTypes } from 'sequelize';

class User extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  
//  static associate(models: any) {
    // define association here
 // }
}

module.exports.init = (sequelize: any) => {

  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    login: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};

export default User;