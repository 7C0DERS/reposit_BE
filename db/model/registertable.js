'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require('bcrypt');
module.exports = (sequelize, DataTypes) => {
  class RegisterTable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RegisterTable.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    userName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'RegisterTable',
  });
  RegisterTable.beforeCreate(async (user) => {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
  });
  
  return RegisterTable;
};