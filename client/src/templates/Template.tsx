import type { ReactNode } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface props {
    children?: ReactNode;
}

export default function ({ children }: props) {
    return (
        <div className="flex flex-col font-geist w-screen min-h-screen bg-background gap-8 font-n">
            <Navbar />

            {children}

            <Footer />
        </div>
    );
}
