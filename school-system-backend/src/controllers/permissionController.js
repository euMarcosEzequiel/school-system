const PermissionServices = require("../services/permissionServices.js");

const permissionServices = new PermissionServices();

class PermissionControllers{
    // Buscar todas as Permissions
    static async findAllPermissions(req, res){
        try {
            const response = await permissionServices.findAllPermissions();
            return res.status(200).send({ message: "Permisions found!", response: response });
        } catch (error) {
            return res.status(400).send({ message: error });
        }
    }

    // Criar uma nova Permission
    static async createPermission(req, res){
        const { name } = req.body;

        if(!name) return res.status(400).send({ message: "Name not provided!" });
        
        const permission = await permissionServices.findPermissionByName(name);

        if(permission) return res.status(400).send({ message: "Permission already registered!" });

        try {
            const response = await permissionServices.createPermission({ name });
            return res.status(201).send({ message: "Permission created!", response: response });
        } catch (error) {
            return res.status(400).send({ message: error });
        }
    }
}

module.exports = PermissionControllers;