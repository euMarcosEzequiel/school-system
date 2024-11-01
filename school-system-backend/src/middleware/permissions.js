const models = require("../database/models");

const permissions = (permissionsList) => {
    return async (req, res, next) => {
        const { userId } = req;

        const user = await models.User.findOne({
            include: [
                {
                    model: models.Permission,
                    as: "users_as_permissions",
                    attributes: ["id", "name"],
                },
            ],
            where: {
                id: userId,
            },
        });

        if(!user) return res.status(200).send({ message: "Unregistered user!" });

        const permissions = user.users_as_permissions
            .map((permission) => permission.name)
            .some((permission) => permissionsList.includes(permission));

        if(!permissions) return res.status(200).send({ message: "Access denied for permission!" });

        return next();
    }
}

module.exports = permissions;