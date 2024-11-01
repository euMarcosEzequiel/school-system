const PermissionServices = require("../services/permissionServices.js");

const permissionServices = new PermissionServices();

class PermissionControllers{
    static async findAllPermissions(req, res){
        try {
            const response = await permissionServices.findAllPermissions();
            return res.status(200).send({ message: "Permisions found!", response: response });
        } catch (error) {
            return res.status(200).send({ message: error });
        }
    }

    static async createPermission(req, res){
        const { name } = req.body;

        const permission = await permissionServices.findPermissionByName(name);

        if(permission) return res.status(200).send({ message: "Permission already registered!" });

        try {
            const response = await permissionServices.createPermission({ name });
            return res.status(201).send({ message: "Permission created!", response: response });
        } catch (error) {
            return res.status(200).send({ message: error });
        }
    }
}

module.exports = PermissionControllers;