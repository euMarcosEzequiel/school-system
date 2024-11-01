const { Router } = require("express");
const UserControllers = require("../controllers/userControllers.js");
const auth = require("../middleware/auth.js");

const router = Router();
router.use(auth);

router
    .get("/user", UserControllers.findAllUsers)
    .post("/user", UserControllers.createUser)

module.exports = router;