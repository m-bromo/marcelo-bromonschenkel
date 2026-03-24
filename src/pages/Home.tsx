import StartButton from "../components/buttons/StartButton";
import Template from "../templates/Template";

export default function () {
    return (
        <Template>
            <div className="flex h-full w-screen flex-1 flex-col items-center justify-center">
                <div className="flex flex-col items-start gap-6 text-left">
                    <div>
                        <h6 className="text-sm text-white/70">
                            Desenvolvedor de Software
                        </h6>
                        <div className="flex flex-col">
                            <h1 className="text-5xl font-bold text-white">
                                Marcelo
                            </h1>
                            <h1 className="text-5xl font-bold text-purple-800">
                                Bromonschenkel
                            </h1>
                        </div>
                    </div>
                    <StartButton />
                </div>
            </div>
        </Template>
    );
}
