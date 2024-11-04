const { Router } = require("express");
const AuthControllers = require("../controllers/authControllers.js");

const authRoutes = Router();

authRoutes
    .post("/auth/login", AuthControllers.login)

module.exports = authRoutes;