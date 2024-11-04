const { Router } = require("express");
const PermissionControllers = require("../controllers/permissionController.js");
const auth = require("../middleware/auth.js");
const roles = require("../middleware/roles.js");

const permissionRoutes = Router();
permissionRoutes.use(auth);

permissionRoutes
    .get("/permission", PermissionControllers.findAllPermissions)
    .post("/permission", roles(["admin"]), PermissionControllers.createPermission)

module.exports = permissionRoutes;