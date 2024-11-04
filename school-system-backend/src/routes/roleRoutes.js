const { Router } = require("express");
const RoleControllers = require("../controllers/roleControllers.js");
const auth = require("../middleware/auth.js");
const roles = require("../middleware/roles.js");

const roleRoutes = Router();
roleRoutes.use(auth);

roleRoutes
    .get("/role", RoleControllers.findAllRoles)
    .post("/role", roles(["admin"]), RoleControllers.createRole)

module.exports = roleRoutes;