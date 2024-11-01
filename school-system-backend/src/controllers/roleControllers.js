const RoleServices = require("../services/roleServices.js");

const roleServices = new RoleServices();

class RoleControllers{
    static async findAllRoles(req, res){
        try {
            const response = await roleServices.findAllRoles();
            return res.status(200).send({ message: "Roles found!", response: response });
        } catch (error) {
            return res.status(400).send({ message: error });
        }
    }

    static async createRole(req, res){
        const { name } = req.body;

        const role = await roleServices.findRoleByName(name);

        if(role) return res.status(200).send({ message: "Role already registered!" });

        try {
            const response = await roleServices.createRole({name});
            return res.status(201).send({ message: "Role created!", response: response});
        } catch (error) {
            return res.status(200).send({ message: error});
        }
    }
}

module.exports = RoleControllers;