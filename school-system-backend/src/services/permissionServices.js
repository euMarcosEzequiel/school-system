const models = require("../database/models");

class PermissionServices{
    async findAllPermissions(){
        try {
            const response = await models.Permission.findAll();
            return response;
        } catch (error) {
            throw new Error(error);
        }
    }

    async findPermissionByName(name){
        try {
            const response = await models.Permission.findOne({ where: { name: name }});
            return response;
        } catch (error) {
            throw new Error(error);
        }
    }

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