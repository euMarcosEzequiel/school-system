const { Router } = require("express");
const RelationshipControllers = require("../controllers/relationshipControllers.js");
const auth = require("../middleware/auth.js");
const roles = require("../middleware/roles.js");

const relationshipRoutes = Router();
relationshipRoutes.use(auth);

relationshipRoutes
    .get("/relationship/user", RelationshipControllers.findAllUserRelationships)
    .get("/relationship/role", RelationshipControllers.findAllRoleRelationships)
    .get("/relationship/permission", RelationshipControllers.findAllPermissionRelationships)
    .post("/relationship/user-role", roles(["admin"]), RelationshipControllers.createUserRoleRelationship)
    .post("/relationship/user-permission", roles(["admin"]), RelationshipControllers.createUserPermissionRelationship)
    .post("/relationship/role-permission", roles(["admin"]), RelationshipControllers.createRolePermissionRelationship)

module.exports = relationshipRoutes;