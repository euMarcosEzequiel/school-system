const SecurityServices = require("../services/securityServices.js");

const securityServices = new SecurityServices();

class SecurityControllers{
    static async findTest(req, res){
        try {
            const response = await securityServices.findTest();
            return res.status(200).send({ message: "Success!", response: response});
        } catch (error) {
            return res.status(200).send({ message: error });
        }
    }
    
    static async create(req, res){
        const { userId, roles, permissions } = req.body;

        const user = await securityServices.findUserById(userId);

        if(!user) return res.status(200).send({ message: "Unregistered user!" });

        try {
            const response = await securityServices.create(user, {userId, roles, permissions});
            return res.status(201).send({ message: "Success!", response: response });
        } catch (error) {
            return res.status(200).send({ message: error });
        }
    }

    static async createPermissionsRoles(req, res){
        const { roleId, permissions } = req.body;
        
        console.log(roleId);
        console.log(permissions);
        
        try {
            const response = await securityServices.createPermissionsRoles({ roleId, permissions });
            return res.status(201).send({ message: "Success!", response: response });
        } catch (error) {
            return res.status(400).send({ message: error });
        }
    }
}

module.exports = SecurityControllers;