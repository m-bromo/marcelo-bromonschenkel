import Links from "./Links";

export default function () {
    return (
        <footer className="bg-background flex w-full flex-col items-center justify-between gap-4 border p-8 md:flex-row">
            <p className="text-white">Marcelo Bromonschenkel © 2026</p>

            <Links />
        </footer>
    );
}
