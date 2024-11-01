const AuthServices = require("../services/authServices.js");
const { compare } = require("bcryptjs");

const authServices = new AuthServices();

class AuthControllers{

    static async login(req, res){
        const { email, password } = req.body;

        const user = await authServices.findUserByEmail(email);

        if(!user) return res.status(200).send({ message: "Unregistered user!" });

        const isPassword = await compare(password, user.password);

        if(!isPassword) return res.status(200).send({ message: "Invalid pasword!" });

        try {
            const token = await authServices.login(user);
            return res.status(200).send({ message: "Login successfully!", token: token });
        } catch (error) {
            return res.status(200).send({ message: error});
        }
    }
}

module.exports = AuthControllers;