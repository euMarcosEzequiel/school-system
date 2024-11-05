import { api } from "@/api"

type LoginData ={
    email: string | null,
    password: string | null,
}

class AuthServices{
    static async login({email, password}: LoginData){
        const response = await api.post("/auth/login", {
            email,
            password,
        });
        return response;
    }
}

export { AuthServices };