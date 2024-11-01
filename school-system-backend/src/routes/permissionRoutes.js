const { Router } = require("express");
const PermissionControllers = require("../controllers/permissionController.js");

const router = Router();

router
    .get("/permission", PermissionControllers.findAllPermissions)
    .post("/permission", PermissionControllers.createPermission)

module.exports = router;