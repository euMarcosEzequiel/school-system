const models = require("../database/models");

const roles = (rolesList) => {
    return async (req, res, next) => {
        const { userId } = req;

        const user = await models.User.findOne({
            include: [
                {
                    model: models.Role,
                    as: "users_as_roles",
                    attributes: ["id", "name"],
                },
            ],
            where: {
                id: userId,
            }
        });

        if(!user) return res.status(200).send({message: "Unregistered user!"});

        const roles = user.users_as_roles
            .map((role) => role.name)
            .some((role) => rolesList.includes(role));

        if(!roles) return res.status(200).send({ message: "Access denied for role!" });

        return next();
    }
}

module.exports = roles;