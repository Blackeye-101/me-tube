import { SidebarTrigger } from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";
import { AuthButton } from "@/modules/auth/ui/components/auth-button";
import { StudioUploadModal } from "../studio-upload-modal";

export const StudioNavbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 h-16 bg-white flex items-center px-2 pr-5 z-50 border-bottom shadow-md">
            <div className="flex items-center gap-4 w-full">
                {/* menu and logo */}
                <div className="flex items-center flex-shrink-0">
                    <SidebarTrigger></SidebarTrigger>
                    <Link href="/studio">
                    <div className="p-4 flex items-center gap-1">
                        <Image src="/logo.svg" height={32} width={32} alt="logo"></Image>
                        <p className="text-xl font-semibold tracking-tight">Studio</p>
                    </div>
                    </Link>
                </div>

                {/* spacer */}
                <div className="flex-1"></div>

                {/* auth button  */}
                <div className="flex-shrink-0 items-center flex gap-4">
                    <StudioUploadModal></StudioUploadModal>
                    <AuthButton></AuthButton>
                </div>


            </div>
        </nav>
    );
};