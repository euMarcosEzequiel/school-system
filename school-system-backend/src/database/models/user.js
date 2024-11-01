'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.belongsToMany(models.Role, {
        through: models.users_roles,
        as: "users_as_roles",
        foreignKey: "user_id",
      }),
      User.belongsToMany(models.Permission, {
        through: models.users_permissions,
        as: "users_as_permissions",
        foreignKey: "user_id",
      })
    }
  }
  User.init({
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    defaultScope: {
      attributes: {
        exclude: ['password']
      }
    }
  });
  return User;
};