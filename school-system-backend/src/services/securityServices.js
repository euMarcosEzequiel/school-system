const models = require("../database/models");
const Sequelize = require("sequelize");

class SecurityServices{
    async findTest(){
        try {
            const response = await models.Role.findAll({
                include: [
                    {
                        model: models.Permission,
                        as: "roles_as_permissions",
                        attributes: ["id", "name"],
                    },
                ],
            });
            return response;
        } catch (error) {
            throw new Error(error);
        }
    }

    async findUserById(userId){
        try {
            const response = await models.User.findOne({
                include: [
                    {
                        model: models.Role,
                        as: "users_as_roles",
                        attributes: ["id", "name"],
                    },
                    {
                        model: models.Permission,
                        as: "users_as_permissions",
                        attributes: ["id", "name"],
                    }
                ],
                where: {
                    id: userId,
                }
            });
            return response;
        } catch (error) {
            throw new Error(error);
        }
    }

    async create(user, dto){
        try {
            const roles = await models.Role.findAll({
                where: {
                    id: {
                        [Sequelize.Op.in]: dto.roles,
                    }
                }
            });
    
            const permissions = await models.Permission.findAll({
                where: {
                    id: {
                        [Sequelize.Op.in]: dto.permissions,
                    }
                }
            });
    
            await user.removeUsers_as_roles(user.users_as_roles);
            await user.removeUsers_as_permissions(user.users_as_permissions);
    
            await user.addUsers_as_roles(roles);
            await user.addUsers_as_permissions(permissions);
    
            const response = await models.User.findOne({
                include: [
                    {
                        model: models.Role,
                        as: "users_as_roles",
                        attributes: ["id", "name"],
                    },
                    {
                        model: models.Permission,
                        as: "users_as_permissions",
                        attributes: ["id", "name"],
                    }
                ],
                where: {
                    id: dto.userId,
                }
            })
            return response;
        } catch (error) {
            throw new Error(error);
        }
    }

    async createPermissionsRoles(dto){
        try {
            const role = await models.Role.findOne({
                include: [
                    {
                        model: models.Permission,
                        as: "roles_as_permissions",
                        attributes: ["id", "name"],
                    }
                ],
                where: {
                    id: dto.roleId
                }
            });
    
            if(!role) throw new Error("Unregistered role!");
    
            const permissions = await models.Permission.findAll({
                where: {
                    id: {
                        [Sequelize.Op.in]: dto.permissions,
                    }
                }
            });
    
            await role.removeRoles_as_permissions(role.roles_as_permissions);
    
            await role.addRoles_as_permissions(permissions);
    
            const response = await models.Role.findOne({
                include: [
                    {
                        model: models.Permission,
                        as: "roles_as_permissions",
                        attributes: ["id", "name"],
                    },
                ],
                where: {
                    id: dto.roleId,
                }
            });
            return response;
        } catch (error) {
            throw new Error(error);
        }
    }
}

module.exports = SecurityServices;