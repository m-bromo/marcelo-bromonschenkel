import type { ReactNode } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface props {
    children?: ReactNode;
}

export default function ({ children }: props) {
    return (
        <div className="font-geist bg-background font-n flex min-h-screen w-full flex-col gap-8">
            <Navbar />

            <div className="flex-1">{children}</div>

            <Footer />
        </div>
    );
}
