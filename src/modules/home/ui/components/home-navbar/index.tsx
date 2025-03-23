import { SidebarTrigger } from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";
import { SearchInput } from "./search-input";
import { AuthButton } from "@/modules/auth/ui/components/auth-button";

export const HomeNavbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 h-16 bg-white flex items-center px-2 pr-5 z-50">
            <div className="flex items-center gap-4 w-full">
                {/* menu and logo */}
                <div className="flex items-center flex-shrink-0">
                    <SidebarTrigger></SidebarTrigger>
                    <Link href="/">
                    <div className="p-4 flex items-center gap-1">
                        <Image src="/logo.svg" height={32} width={32} alt="logo"></Image>
                        <p className="text-xl font-semibold tracking-tight">MeTube</p>
                    </div>
                    </Link>
                </div>

                {/* search bar */}
                <div className="flex-1 flex justify-center max-w-[729px] mx-auto">
                    <SearchInput></SearchInput>
                </div>

                {/* auth button  */}
                <div className="flex-shrink-0 items-center flex gap-4">
                    <AuthButton></AuthButton>
                </div>


            </div>
        </nav>
    );
};