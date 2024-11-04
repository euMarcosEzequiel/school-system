const models = require("../database/models/index.js");
const secret = require("../database/config/secret.js");
const { sign } = require("jsonwebtoken");

class AuthServices {
    async findUserByEmail(userEmail) {
        try {
            const response = await models.User.findOne({
                attributes: ["id","name", "surname", "email", "password"],
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
                    },
                ],
                where: {
                    email: userEmail,
                }
            });
            return response;
        } catch (error) {
            throw new Error(error);
        }
    }

    async login(user) {
        try {
            const accessToken = sign({
                id: user.id,
                name: user.name,
                surname: user.surname,
                email: user.email,
                roles: user.users_as_roles,
                permissions: user.users_as_permissions,
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