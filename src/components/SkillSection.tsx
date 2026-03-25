import { CodeXml, Database, Server, Wrench } from "lucide-react";
import type { Skill } from "../models/skill";
import Section from "./Section";
import SkillCard from "./SkillCard";

export default function () {
    const skills: Skill[] = [
        {
            area: "Frontend",
            icon: <CodeXml />,
            skills: ["Tailwind", "Typescript", "React", "Vue.js", "Next.js"],
        },
        {
            area: "Backend",
            icon: <Server />,
            skills: ["C#", ".Net", "Entity Framework", "Golang"],
        },
        {
            area: "Banco de Dados",
            icon: <Database />,
            skills: ["Postgres", "Mysql", "Sqlserver", "Redis"],
        },
        {
            area: "Ferramentas",
            icon: <Wrench />,
            skills: ["Git", "Docker", "CI/CD"],
        },
    ];

    return (
        <Section header="Habilidades Técnicas">
            <ul className="flex auto-cols-fr grid-flow-row grid-cols-2 flex-col gap-4 md:grid">
                {skills.map((item) => (
                    <SkillCard skill={item} />
                ))}
            </ul>
        </Section>
    );
}
