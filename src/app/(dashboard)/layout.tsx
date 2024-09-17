import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <div className="min-h-screen flex ">

                {/* Left Section */}
                <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] bg-gradient-to-r from-[#fbc2eb] to-blue-300 p-4 ">
                    <Link className="flex items-center justify-center lg:justify-start  gap-2" href="/">
                        <Image src="/logo.png" alt="logo" width={32} height={32} ></Image>
                        <span className="hidden lg:block hover:text-blue-600 font-extrabold hover:translate-y-1">SchoolHome</span>
                    </Link>
                    <Menu></Menu>
                </div>

                {/* Right Section */}
                <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-gradient-to-r from-[#bdc2e8] to-[#e6dee9] overflow-scroll">
                    <Navbar></Navbar>
                    {children}
                </div>

            </div>
        </div>
    );
}