const UserServices = require("../services/userServices.js");
const { hash } = require("bcryptjs");

const userServices = new UserServices();

class UserControllers{
    static async findAllUsers(req, res){
        try {
            const response = await userServices.findAllUsers();
            return res.status(200).send({ message: "Users found!", response: response });
        } catch (error) {
            return res.status(200).send({ message: error });
        }
    }

    static async createUser(req, res){
        const { name, surname, email, password } = req.body;

        const user = await userServices.findUserByEmail(email);

        if(user) return res.status(200).send({ message: "Email already registered!" });

        const passwordHash = await hash(password, 8);

        try {
            const response = await userServices.createUser({name, surname, email, passwordHash});
            return res.status(201).send({ message: "User created!", response: response });
        } catch (error) {
            return res.status(200).send({ message: error });
        }
    }
}

module.exports = UserControllers;