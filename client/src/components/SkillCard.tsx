import type { Skill } from "../models/skill";

interface props {
    skill: Skill;
}

export default function ({ skill }: props) {
    return (
        <li className="flex flex-col gap-4 rounded-2xl border border-purple-900/50 p-8 transition-all duration-300 hover:border-purple-900">
            <div className="flex flex-row items-center gap-4">
                <div className="flex rounded-2xl bg-purple-700/50 p-2">
                    {skill.icon}
                </div>

                <h1 className="font-semibold">{skill.area}</h1>
            </div>

            <ul className="flex flex-col gap-2">
                {skill.skills.map((item) => (
                    <li>{item}</li>
                ))}
            </ul>
        </li>
    );
}
