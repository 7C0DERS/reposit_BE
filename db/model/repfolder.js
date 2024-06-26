'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RepFolder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RepFolder.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    UserId: DataTypes.STRING,
    FolderName: DataTypes.STRING,
    stages: DataTypes.ARRAY(DataTypes.STRING),
  }, {
    sequelize,
    modelName: 'RepFolder',
  });
  return RepFolder;
};