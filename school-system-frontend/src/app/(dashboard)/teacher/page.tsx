"use client";

import { useEffect } from "react";

export default function Teacher(){
    useEffect(() => {
        const role = localStorage.getItem("@school-system:role");

        if(role !== "teacher"){
            window.location.href = "/login";
        }

    }, []);
    return(
        <h1 className="text-2xl font-bold">Teacher Page</h1>
    );
}