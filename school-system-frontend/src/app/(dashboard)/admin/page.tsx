"use client";
import { useEffect } from "react";

export default function Admin(){

    useEffect(() => {
        const role = localStorage.getItem("@school-system:role");

        if(role !== "admin"){
            window.location.href = "/login";
        }

    }, []);

    return(
        <h1 className="text-2xl font-bold">Admin Page</h1>
    );
}