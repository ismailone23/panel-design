'use client'

import Navbar from "@/components/ui/navbar";
import Sidebar from "@/components/ui/Sidebar";

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <div className="flex w-full h-screen overflow-hidden flex-row">
                <div>
                    <Sidebar />
                </div>
                <div className="w-full h-full overflow-hidden flex flex-col">
                    <Navbar />
                    {children}
                </div>
            </div>
        </>
    );
}
