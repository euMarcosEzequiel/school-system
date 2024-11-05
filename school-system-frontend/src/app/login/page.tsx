"use client";
import { AuthServices } from "@/services/authServices";
import { FormEvent, useEffect, useState } from "react";
import { decode } from "jsonwebtoken";
import { useRouter } from "next/router";

interface role{
    id: number,
    name: string,
}

export default function LoginPage(){
    const [email, setEmail] = useState<string | null>(null);
    const [password, setPassword] = useState<string | null>(null);

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        const response = await AuthServices.login({ email, password});
        const token = response.data.response;
        const user = await decode(token);
        console.log(user);
        const roles = user.roles;        

        localStorage.setItem("@school-system:accessToken", token);
        
        roles.map((role) => {
            localStorage.setItem("@school-system:role", role.name);
        });

        const role = localStorage.getItem("@school-system:role");
        
        if(role === "admin"){
            window.location.href = "/admin";
        }
        else if(role === "teacher"){
            window.location.href = "/teacher";
        }
        else if(role === "student"){
            window.location.href = "/student";
        }
    }

    return(
        <div className="w-screen h-screen flex items-center justify-center bg-blue-100">
            <div className="flex flex-col bg-white rounded-lg border-2 border-gray-300 p-6 gap-6">
                <h2 className="text-gray-500 font-bold text-2xl">Login</h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input 
                        onChange={event => setEmail(event.target.value)}
                        type="email" 
                        name="email" 
                        id="email"
                        placeholder="Email"
                        className="bg-transparent border-2 border-gray-300 rounded-lg text-lg text-gray-500 px-2 py-1 outline-none"
                    />
                    <input 
                        onChange={event => setPassword(event.target.value)}
                        type="password" 
                        name="password" 
                        id="password"
                        placeholder="Password"
                        className="bg-transparent border-2 border-gray-300 rounded-lg text-lg text-gray-500 px-2 py-1 outline-none"
                    />
                    <button 
                        type="submit" 
                        className="bg-blue-400 px-2 py-1 text-lg font-semibold text-white rounded-lg"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}