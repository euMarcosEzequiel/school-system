import Image from "next/image";
import { HiMagnifyingGlass } from "react-icons/hi2";
import ProfileImg from "../../../public/profile.png"
import { IoIosNotificationsOutline } from "react-icons/io";

export function Navbar(){
    return(
        <div className="flex items-center justify-end p-4 md:justify-between">
            <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-400 px-2 text-gray-500">
                <HiMagnifyingGlass size={20} />
                <input type="text" placeholder="Search..." className="w-[200px] p-2 bg-transparent outline-none" />
            </div>
            <div className="flex items-center gap-5 bg-blue-50 py-2 px-4 rounded-lg">
                <div className="flex items-center justify-center relative cursor-pointer">
                    <IoIosNotificationsOutline size={24} />
                    <div className="absolute -top-2 -right-2 w-5 h-5 text-xs flex items-center justify-center bg-red-500 text-white rounded-full">20</div>
                </div>
                <div className="flex flex-col">
                    <span className="text-sm leading-3 font-medium">Marcos</span>
                    <span className="text-xs text-gray-500 text-right">Admin</span>
                </div>
                <Image src={ProfileImg} alt="" width={38} height={38} className="rounded-full"/>                
            </div>
        </div>
    );
}