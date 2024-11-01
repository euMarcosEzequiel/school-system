const { verify, decode } = require("jsonwebtoken");
const secret = require("../database/config/secret.js");

module.exports = async (req, res, next) => {
    const token = req.headers.authorization;

    if(!token) return res.status(200).send({ message: "Access token not provided!" });

    const [, accessToken] = token.split(" ");

    try {
        verify(accessToken, secret.secret);

        const {id, email} = await decode(accessToken);

        req.userId = id;
        req.userEmail = email;

        return next();

    } catch (error) {
        return res.status(200).send({ message: "Access denied!" });
    }
}