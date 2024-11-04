const Sequelize = require("sequelize");
const models = require("../database/models");

class RelationshipServices{
    // Buscar todos os relacionamentos de User com Role e Permission
    async findAllUserRelationships(){
        try {
            const response = await models.User.findAll({
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
            });
            return response;
        } catch (error) {
            throw new Error(error);
        }
    }

    // Buscar todos os relacionamentos de Role com User e Permission
    async findAllRoleRelationships(){
        try {
            const response = await models.Role.findAll({
                include: [
                    {
                        model: models.User,
                        as: "roles_as_users",
                        attributes: ["id", "name", "surname", "email"],
                    },
                    {
                        model: models.Permission,
                        as: "roles_as_permissions",
                        attributes: ["id", "name"],
                    },
                ],
            });
            return response;
        } catch (error) {
            console.log(error)
            throw new Error(error);
        }
    }

    //Buscar todos os relacionamentos de Permission com User e Role
    async findAllPermissionRelationships(){
        try {
            const response = await models.Permission.findAll({
                include: [
                    {
                        model: models.User,
                        as: "permissions_as_users",
                        attributes: ["id", "name", "surname", "email"],
                    },
                    {
                        model: models.Role,
                        as: "permissions_as_roles",
                        attributes: ["id", "name"],
                    }
                ],
            });
            return response;
        } catch (error) {
            throw new Error(error);
        }
    }

    // Buscar os relacionamentos de um User com Role e Permission pelo ID
    async findUserRelationshipsById(userId){
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

    // Buscar os relacionamentos de uma Role com Permission pelo ID
    async findRoleRelationshipsById(roleId){
        try {
            const response = await models.Role.findOne({
                include: [
                    {
                        model: models.Permission,
                        as: "roles_as_permissions",
                        attributes: ["id", "name"],
                    },
                ],
                where: {
                    id: roleId,
                }
            });
            return response;
        } catch (error) {
            throw new Error(error);
        }
    }

    // Criar um relacionamento entre User e Role
    async createUserRoleRelationship(user, dto){
        try {
            const roles = await models.Role.findAll({
                where: {
                    id: {
                        [Sequelize.Op.in]: dto.roles,
                    }
                }
            });
    
            await user.removeUsers_as_roles(user.users_as_roles);
    
            await user.addUsers_as_roles(roles);
    
            const response = await this.findUserRelationshipsById(dto.userId);
            return response;
        } catch (error) {
            throw new Error(error);
        }
    }

    // Criar um relacionamento entre User e Permission
    async createUserPermissionRelationship(user, dto){
        try {
            const permissions = await models.Permission.findAll({
                where: {
                    id: {
                        [Sequelize.Op.in]: dto.permissions,
                    }
                }
            });

            await user.removeUsers_as_permissions(user.users_as_permissions);

            await user.addUsers_as_permissions(permissions);

            const response = await this.findUserRelationshipsById(dto.userId);
            return response;
        } catch (error) {
            throw new Error(error);
        }
    }

    // Criar um relacionamento entre Role e Permission
    async createRolePermissionRelationship(role, dto){
        try {
            const permissions = await models.Permission.findAll({
                where: {
                    id: {
                        [Sequelize.Op.in]: dto.permissions,
                    }
                }
            });
    
            await role.removeRoles_as_permissions(role.roles_as_permissions);
    
            await role.addRoles_as_permissions(permissions);

            const response = await this.findRoleRelationshipsById(dto.roleId);
            return response;
        } catch (error) {
            throw new Error(error);
        }
    }
}

module.exports = RelationshipServices;