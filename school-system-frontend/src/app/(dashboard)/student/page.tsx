"use client";

import { useEffect } from "react";

export default function Student(){
    
    useEffect(() => {
        const role = localStorage.getItem("@school-system:role");

        if(role !== "student"){
            window.location.href = "/login";
        }

    }, []);

    return(
        <h1 className="text-2xl font-bold">Student Page</h1>
    );
}