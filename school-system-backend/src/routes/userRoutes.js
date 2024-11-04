const { Router } = require("express");
const UserControllers = require("../controllers/userControllers.js");
const auth = require("../middleware/auth.js");
const roles = require("../middleware/roles.js");
const permissions = require("../middleware/permissions.js");

const userRoutes = Router();
userRoutes.use(auth);

userRoutes
    .get("/user", UserControllers.findAllUsers)
    .post("/user", roles(["admin"]), UserControllers.createUser)

module.exports = userRoutes;