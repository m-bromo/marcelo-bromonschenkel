import { useNavigate } from "react-router";

export default function () {
    const navigate = useNavigate();

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        navigate("/about");
    };

    return (
        <button
            className="flex rounded-2xl bg-purple-800 px-4 py-2 font-semibold text-white transition-all duration-300 hover:bg-purple-950"
            onClick={handleClick}
        >
            Começar
        </button>
    );
}
