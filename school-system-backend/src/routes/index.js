const express = require("express");
const cors = require("cors");
const authRoutes = require("./authRoutes.js");
const userRoutes = require("./userRoutes.js");
const roleRoutes = require("./roleRoutes.js");
const permissionRoutes = require("./permissionRoutes.js");
const securityRoutes = require("./securityRoutes.js");

module.exports = app => {
    app.use(
        express.json(),
        cors(),
        authRoutes,
        userRoutes,
        roleRoutes,
        permissionRoutes,
        securityRoutes,
    );
}