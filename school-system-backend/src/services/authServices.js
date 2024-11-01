const models = require("../database/models");
const { sign } = require("jsonwebtoken");
const secret = require("../database/config/secret.js");

class AuthServices{
    async findUserByEmail(email){
        try {
            const response = await models.User.findOne({
                attributes: ["id", "email", "password"],
                where: {
                    email: email,
                }
            });
            return response;
        } catch (error) {
            throw new Error(error);
        }
    }
    
    async login(user){
        try {
            const accessToken = sign({
                id: user.id,
                email: user.email,
            }, secret.secret, {
                expiresIn: 86400
            });
            return accessToken;
        } catch (error) {
            throw new Error(error);
        }
    }
}

module.exports = AuthServices;