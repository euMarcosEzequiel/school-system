const models = require("../database/models");

class PermissionServices{
    // Buscar todas as Permissions 
    async findAllPermissions(){
        try {
            const response = await models.Permission.findAll();
            return response;
        } catch (error) {
            throw new Error(error);
        }
    }

    // Buscar uma Permission por nome
    async findPermissionByName(permissionName){
        try {
            const response = await models.Permission.findOne({ 
                where: { 
                    name: permissionName 
                }
            });
            return response;
        } catch (error) {
            throw new Error(error);
        }
    }

    // Criar uma nova Permission
    async createPermission(dto){
        try {
            const response = await models.Permission.create({
                name: dto.name,
            });
            return response;
        } catch (error) {
            throw new Error(error);
        }
    }
}

module.exports = PermissionServices;