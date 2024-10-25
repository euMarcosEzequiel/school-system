import { ReactNode } from "react";

interface LoginLayoutProps{
    children: ReactNode,
}

export const metadata = {
    title: "School - Login"
}

export default function LoginLayout({ children }: LoginLayoutProps){
    return ( 
        <div>
            {children}
        </div>
    );
}