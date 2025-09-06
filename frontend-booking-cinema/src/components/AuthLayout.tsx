import type { ReactNode } from "react";

interface AuthLayoutProps {
    children?: ReactNode;
    rightBgUrl?: string;
}
const AuthLayout = ({ children, rightBgUrl }: AuthLayoutProps) => {
    return (
        <div className="h-screen w-screen flex overflow-hidden">
            <div className="w-1/2 h-full flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-red-900">{children}</div>
            <div
                className="w-1/2 h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${rightBgUrl})` }}>
            </div>
        </div>
    );
};

export default AuthLayout;
