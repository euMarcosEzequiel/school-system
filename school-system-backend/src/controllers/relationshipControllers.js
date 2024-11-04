const RelationshipServices = require("../services/relationshipSevices.js");

const relationshipServices = new RelationshipServices();

class RelationshipControllers{

    static async findAllUserRelationships(req, res){
        try {
            const response = await relationshipServices.findAllUserRelationships();
            return res.status(200).send({ message: "Success!", response: response });
        } catch (error) {
            return res.status(400).send({ message: error });
        }
    }

    static async findAllRoleRelationships(req, res){
        try {
            const response = await relationshipServices.findAllRoleRelationships();
            return res.status(200).send({ message: "Success!", response: response });
        } catch (error) {
            return res.status(400).send({ message: error });
        }
    }

    static async findAllPermissionRelationships(req, res){
        try {
            const response = await relationshipServices.findAllPermissionRelationships();
            return res.status(200).send({ message: "Success!", response: response });
        } catch (error) {
            return res.status(400).send({ message: error });
        }
    }

    static async createUserRoleRelationship(req, res){
        const { userId, roles } = req.body;


        if(!userId || !roles) return res.status(400).send({ message: "UserID/Roles not provided!" });

        const user = await relationshipServices.findUserRelationshipsById(userId);

        if(!user) return res.status(400).send({ message: "Unregistered user!" });

        try {
            const response = await relationshipServices.createUserRoleRelationship(user, { userId, roles });
            return res.status(201).send({ message: "Success!", response: response });
        } catch (error) {
            return res.status(400).send({ message: error });
        }
    }

    static async createUserPermissionRelationship(req, res){
        const { userId, permissions } = req.body;
        
        if(!userId || !permissions) return res.status(400).send({ message: "UserID/Permissions not provided!" });

        const user = await relationshipServices.findUserRelationshipsById(userId);

        if(!user) return res.status(400).send({ message: "Unregistered user!" });

        try {
            const response = await relationshipServices.createUserPermissionRelationship(user, { userId, permissions });
            return res.status(201).send({ message: "Success!", response: response });
        } catch (error) {
            return res.status(400).send({ message: error });
        }
    }
    
    static async createRolePermissionRelationship(req, res){
        const { roleId, permissions } = req.body;

        if(!roleId || !permissions) return res.status(400).send({ message: "RoleID/Permissions not provided!" });

        const role = await relationshipServices.findRoleRelationshipsById(roleId);

        if(!role) return res.status(400).send({ message: "Unregistered role!" });

        try {
            const response = await relationshipServices.createRolePermissionRelationship(role, { roleId, permissions });
            return res.status(201).send({ message: "Success!", response: response });
        } catch (error) {
            return res.status(400).send({ message: error });
        }

    }
}

module.exports = RelationshipControllers;