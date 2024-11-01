const models = require("../database/models");

class RoleServices{
    async findAllRoles(){
        try {
            const response = await models.Role.findAll();
            return response;
        } catch (error) {
            throw new Error(error);
        }
    }

    async findRoleByName(name){
        try {
            const response = await models.Role.findOne({ where: { name: name }});
            return response;
        } catch (error) {
            throw new Error(error);
        }
    }

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