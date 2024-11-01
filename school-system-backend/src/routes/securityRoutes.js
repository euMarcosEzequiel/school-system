const { Router } = require("express");
const SecurityControllers = require("../controllers/securityControllers.js");

const router = Router();

router
    .get("/security/role", SecurityControllers.findTest)
    .post("/security/user", SecurityControllers.create)
    .post("/security/permissions-roles", SecurityControllers.createPermissionsRoles)

module.exports = router;