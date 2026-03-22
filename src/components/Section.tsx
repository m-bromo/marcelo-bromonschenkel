import type { ReactNode } from "react";

interface props {
    header: string;
    subheader?: string;
    children?: ReactNode;
}

export default function ({ header, subheader, children }: props) {
    return (
        <div className="flex flex-col gap-10 text-white">
            <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-bold">{header}</h1>
                <h2 className="text-x text-white/70">{subheader}</h2>
            </div>

            {children}
        </div>
    );
}
