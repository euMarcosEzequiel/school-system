const models = require("../database/models");

class UserServices{
    async findAllUsers(){
        try {
            const response = await models.User.findAll();
            return response;
        } catch (error) {
            throw new Error(error);
        }
    }

    async findUserByEmail(email){
        try {
            const response = await models.User.findOne({ where: { email: email }});
            return response;   
        } catch (error) {
            throw new Error(error);
        }
    }

    async createUser(dto){
        try {    
            const response = await models.User.create({
                name: dto.name,
                surname: dto.surname,
                email: dto.email,
                password: dto.passwordHash,
            });
            return response;
        } catch (error) {
            throw new Error(error);
        }
    }
}

module.exports = UserServices;