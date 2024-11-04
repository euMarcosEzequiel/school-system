const { verify, decode } = require("jsonwebtoken");
const secret = require("../database/config/secret.js");

module.exports = async (req, res, next) => {
    const token = req.headers.authorization;

    if(!token) return res.status(400).send({ message: "Access token not provided!" });

    const parts = token.split(" ");

    if(parts.length !== 2 || parts[0] !== "Bearer") return res.status(401).send({ message: "Invalid token format!" });

    const accessToken = parts[1];

    try {
        verify(accessToken, secret.secret);

        const { id } = await decode(accessToken);
        req.userId = id;
        return next();
    } catch (error) {
        return res.status(401).send({ message: "Access denied!" });
    }
}