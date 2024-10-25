import { ReactNode } from "react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar/page";
import { Sidebar } from "@/components/Sidebar/page";
import Logo from "../../../public/logo.png"

interface DashboardLayoutProps{
    children: ReactNode,
}

export const metadata = {
    title: "School - Dashboard"
}

export default function DashboardLayout({ children }: DashboardLayoutProps){
    return ( 
        <div className="h-screen flex bg-blue-100">
            <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] bg-blue-50 p-4">
                <div className="flex items-center justify-center lg:justify-start gap-2">
                    <Image src={Logo} alt="logo" width={38} height={38} />
                    <span className="font-semibold hidden lg:block">SchoolSystem</span>
                </div>
                <Sidebar />
            </div>
            <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] overflow-y-scroll">
                <Navbar />
                {children}
            </div>            
        </div>
    );
}