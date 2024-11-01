const { Router } = require("express");
const AuthControllers = require("../controllers/authControllers.js");

const router = Router();

router
    .post("/auth/login", AuthControllers.login)

module.exports = router;