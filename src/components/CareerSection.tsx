import CareerCard from "./CareerCard";
import type { Job } from "../models/job";
import Section from "./Section";

export default function () {
    const jobs: Job[] = [
        {
            title: "Estagiário de Desenvolvimento de Softwate",
            description:
                "Sou parte do time do SIARMNET, onde mantenho e desenvolvo o sistema de arrecadação municipal.",
            workPlace: "Tiplan",
            startDate: new Date("2025-12-01"),
            endDate: null,
            competences: ["Vue.js", "C#", "Javascript", "Sqlserver"],
        },
        {
            title: "Estagiário de Análise de Dados",
            description:
                "Trabalhei na equipe do Processo Judicial Eletrônico, onde recolhia e analisava dados",
            workPlace: "Tribunal de Justiça do Estado do Rio de Janeiro",
            startDate: new Date("2025-09-01"),
            endDate: new Date("2025-11-30"),
            competences: ["PowerBI", "Postgresql", "Dax"],
        },
    ];

    return (
        <Section
            header="Experiencia Profissional"
            subheader="Minha trajetoria no mundo do desenvolvimento"
        >
            <ul className="flex flex-col gap-8">
                {jobs.map((item) => (
                    <CareerCard job={item} />
                ))}
            </ul>
        </Section>
    );
}
