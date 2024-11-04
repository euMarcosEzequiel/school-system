const models = require("../database/models");

class RoleServices{
    // Buscar todas as Roles
    async findAllRoles(){
        try {
            const response = await models.Role.findAll();
            return response;
        } catch (error) {
            throw new Error(error);
        }
    }

    // Buscar uma Role por nome
    async findRoleByName(roleName){
        try {
            const response = await models.Role.findOne({ 
                where: { 
                    name: roleName 
                }
            });
            return response;
        } catch (error) {
            throw new Error(error);
        }
    }

    // Criar uma nova Role
    async createRole(dto){
        try {
            const response = await models.Role.create({
                name: dto.name,
            });
            return response;
        } catch (error) {
            throw new Error(error);
        }
    }
}

module.exports = RoleServices;