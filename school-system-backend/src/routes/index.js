const { json } = require("express");
const cors = require("cors");
const authRoutes = require("./authRoutes.js");
const userRoutes = require("./userRoutes.js");
const roleRoutes = require("./roleRoutes.js");
const permissionRoutes = require("./permissionRoutes.js");
const relationshipRoutes = require("./relationshipRoutes.js");

module.exports = app => {
    app.use(
        json(),
        cors(),
        authRoutes,
        userRoutes,
        roleRoutes,
        permissionRoutes,
        relationshipRoutes,
    );
}