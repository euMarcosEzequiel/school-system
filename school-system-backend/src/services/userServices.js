const models = require("../database/models");

class UserServices{
    //Buscar todos os Users
    async findAllUsers(){
        try {
            const response = await models.User.findAll();
            return response;
        } catch (error) {
            throw new Error(error);
        }
    }

    // Buscar um User por email
    async findUserByEmail(userEmail){
        try {
            const response = await models.User.findOne({
                where: { 
                    email: userEmail, 
                },
            });
            return response;   
        } catch (error) {
            throw new Error(error);
        }
    }

    // Criar um novo User
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