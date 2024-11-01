const { Router } = require("express");
const RoleControllers = require("../controllers/roleControllers.js");

const router = Router();

router
    .get("/role", RoleControllers.findAllRoles)
    .post("/role", RoleControllers.createRole)

module.exports = router;