const AuthServices = require("../services/authServices.js");
const {compare} = require("bcryptjs");

const authServices = new AuthServices();

class AuthControllers{

    static async login(req, res){
        const { email, password } = req.body;

        if(!email || !password) return res.status(400).send({ message: "Email/Password not provided!" })

        const user = await authServices.findUserByEmail(email);

        if(!user) return res.status(400).send({ message: "Unregistered user!" });

        const isPassword = await compare(password, user.password);

        if(!isPassword) return res.status(400).send({ message: "Invalid pasword!" });

        try {
            const response = await authServices.login(user);
            return res.status(200).send({ message: "Login successfully!", response: response });
        } catch (error) {
            return res.status(401).send({ message: error});
        }
    }
}

module.exports = AuthControllers;