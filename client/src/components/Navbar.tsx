import { NavLink } from "react-router";

export default function () {
    const navLinkStyles = ({ isActive }: { isActive: boolean }): string =>
        `transition-colors duration-200 ${
            isActive
                ? "text-purple-800 font-semibold"
                : "text-white hover:text-purple-300"
        }`;

    return (
        <nav className="bg-background/20 sticky top-0 left-0 flex w-full flex-row items-center justify-between gap-4 border p-6 text-xl backdrop-blur-lg">
            <ul className="flex flex-row gap-8 text-white">
                <li>
                    <NavLink to="/about" className={navLinkStyles}>
                        Sobre
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/projects" className={navLinkStyles}>
                        Projetos
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
