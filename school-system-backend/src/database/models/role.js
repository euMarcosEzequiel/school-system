'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    
    static associate(models) {
      Role.belongsToMany(models.User, {
        through: models.users_roles,
        as: "roles_as_users",
        foreignKey: "role_id",
      }),
      Role.belongsToMany(models.Permission, {
        through: models.roles_permissions,
        as: "roles_as_permissions",
        foreignKey: "role_id",
      })
    }
  }
  Role.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Role',
    tableName: "roles"
  });
  return Role;
};