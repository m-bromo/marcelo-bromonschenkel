import CareerCard from "./CareerCard";
import type { Job } from "../models/job";
import Section from "./Section";

export default function () {
    const jobs: Job[] = [
        {
            title: "Estagiário de Desenvolvimento de Softwate",
            description:
                "Faço parte do time do SIARMNET, atuando na manutenção e desenvolvimento do sistema de arrecadação municipal, com foco em melhorias contínuas, correção de problemas e implementação de novas funcionalidades.",
            workPlace: "Tiplan",
            startDate: new Date("2025-12-01"),
            endDate: null,
            competences: ["Vue.js", "C#", "Javascript", "Sqlserver"],
        },
        {
            title: "Estagiário de Análise de Dados",
            description:
                "Atuei na equipe do Processo Judicial Eletrônico, realizando a coleta, tratamento e análise de dados para geração de insights estratégicos. Desenvolvi dashboards interativos no Power BI, facilitando a visualização de indicadores e apoiando a tomada de decisão.",
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
