import CareerSection from "../components/CareerSection";
import Header from "../components/Header";
import IntroductionSection from "../components/IntroductionSection";
import SkillSection from "../components/SkillSection";
import Template from "../templates/Template";

export default function () {
    return (
        <Template>
            <main className="flex-1 p-4">
                <div className="flex flex-col items-center">
                    <div className="flex max-w-200 flex-col gap-12">
                        <IntroductionSection />

                        <CareerSection />

                        <SkillSection />
                    </div>
                </div>
            </main>
        </Template>
    );
}
