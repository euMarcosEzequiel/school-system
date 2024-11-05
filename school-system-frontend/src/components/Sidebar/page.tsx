"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineHome, AiOutlineMessage } from "react-icons/ai";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoBarChartOutline, IoCalculatorOutline, IoCalendarNumberOutline, IoLogOutOutline, IoMegaphoneOutline } from "react-icons/io5";
import { LuBookMarked } from "react-icons/lu";
import { PiChalkboardTeacherLight, PiGear, PiStudent } from "react-icons/pi";
import { RiParentLine, RiPencilRulerLine } from "react-icons/ri";
import { SiGoogleclassroom } from "react-icons/si";

const sizeIcons = 20;

const sidebarItems = [
    {
        title: "MENU",
        list: [
            {
                label: "Home",
                path: "/",
                icon: <AiOutlineHome size={sizeIcons} />,
                role: ["admin"]
            },
            {
                label: "Teachers",
                path: "/teachers",
                icon: <PiChalkboardTeacherLight size={sizeIcons} />,
                role: ["admin", "teacher"]
            },
            {
                label: "Students",
                path: "/students",
                icon: <PiStudent size={sizeIcons} />,
                role: ["admin", "student"]
            },
            {
                label: "Parents",
                path: "/parents",
                icon: <RiParentLine size={sizeIcons} />,
                role: ["admin"]
            },
            {
                label: "Classes",
                path: "/classes",
                icon: <SiGoogleclassroom size={sizeIcons} />,
                role: ["admin"]
            },
            {
                label: "Lessons",
                path: "/lessons",
                icon: <RiPencilRulerLine size={sizeIcons} />,
                role: ["admin"]
            },
            {
                label: "Exams",
                path: "/exams",
                icon: <IoCalculatorOutline size={sizeIcons} />,
                role: ["admin"]
            },
            {
                label: "Assignments",
                path: "/assignments",
                icon: <LuBookMarked size={sizeIcons} />,
                role: ["admin"]
            },
            {
                label: "Attendance",
                path: "/attendance",
                icon: <IoBarChartOutline size={sizeIcons} />,
                role: ["admin"]
            },
            {
                label: "Messages",
                path: "/messages",
                icon: <AiOutlineMessage size={sizeIcons} />,
                role: ["admin"]
            },
        ]
    },
    {
        title: "OTHER",
        list: [
            {
                label: "Profile",
                path: "/profile #",
                icon: <FaRegCircleUser size={sizeIcons} />,
                role: ["admin"]
            },
            {
                label: "Events",
                path: "/events",
                icon: <IoCalendarNumberOutline size={sizeIcons} />,
                role: ["admin"]
            },
            {
                label: "Announcements",
                path: "/announcements",
                icon: <IoMegaphoneOutline size={sizeIcons} />,
                role: ["admin"]
            },
            {
                label: "Settings",
                path: "/settings",
                icon: <PiGear size={sizeIcons} />,
                role: ["admin"]
            },        
        ]
    },
]

export function Sidebar(){
    const [userRole, setUserRole] = useState<string>("");

    useEffect(() => {
        const role = localStorage.getItem("@school-system:role");
        setUserRole(role as string);
    }, []);

    return(
        <div className="flex flex-col mt-4 text-sm gap-2">
            {sidebarItems.map((items) => (
                <div className="flex flex-col gap-2" key={items.title}>
                    <span className="hidden lg:block text-gray-400 font-light my-4">
                        {items.title}
                    </span>
                    {items.list
                        .filter((item) => item.role.includes(userRole))
                        .map((item) => (
                        <Link href={item.path} key={item.label} className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 p-2 rounded-md transition ease-linear hover:bg-blue-100">
                            <div>
                                {item.icon}
                            </div>
                            <span className="hidden lg:block overflow-hidden text-ellipsis">
                                {item.label}
                            </span>
                        </Link>
                    ))}
                </div>
            ))}
        </div>
    );
}