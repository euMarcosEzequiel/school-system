"use client"
import Image from "next/image";
import { HiMagnifyingGlass } from "react-icons/hi2";
import ProfileImg from "../../../public/profile.png"
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoLogOutOutline } from "react-icons/io5";
import { useEffect, useState } from "react";

export function Navbar(){
    const [role, setRole] = useState<string>("");

    const handleSignOut = () => {
        localStorage.removeItem("@school-system:accessToken");
        localStorage.removeItem("@school-system:role");
        window.location.href = "/login";
    }

    useEffect(() => {
        const role = localStorage.getItem("@school-system:role") as string;
        setRole(role);
    }, []);

    return(
        <div className="flex items-center justify-end p-4 md:justify-between">
            <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-400 px-2 text-gray-500">
                <HiMagnifyingGlass size={20} />
                <input type="text" placeholder="Search..." className="w-[200px] p-2 bg-transparent outline-none" />
            </div>
            <div className="flex items-center gap-5 bg-blue-50 py-2 px-4 rounded-lg">
                <div className="flex items-center justify-center relative cursor-pointer">
                    <button onClick={handleSignOut} title="Sign Out">
                        <IoLogOutOutline size={24} />
                    </button>
                </div>
                <div className="flex items-center justify-center relative cursor-pointer">
                    <IoIosNotificationsOutline size={24} />
                </div>
                <div className="flex flex-col">
                    <span className="text-sm leading-3 font-medium">Marcos</span>
                    <span className="text-xs text-gray-500 text-right">{role}</span>
                </div>
                <Image src={ProfileImg} alt="" width={38} height={38} className="rounded-full"/>                
            </div>
        </div>
    );
}