'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Permission extends Model {

    static associate(models) {
      Permission.belongsToMany(models.User, {
        through: models.users_permissions,
        as: "permissions_as_users",
        foreignKey: "permission_id",
      }),
      Permission.belongsToMany(models.Role, {
        through: models.roles_permissions,
        as: "permissions_as_roles",
        foreignKey: "permission_id",
      })
    }
  }
  Permission.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Permission',
    tableName: "permissions",
  });
  return Permission;
};