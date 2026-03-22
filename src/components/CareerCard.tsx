import type { Job } from "../models/job";

interface props {
    job: Job;
}

export default function ({ job }: props) {
    const displayDate = job.endDate?.toLocaleDateString() ?? "Presente";

    return (
        <li className="flex flex-col gap-4 rounded-2xl border border-purple-900/50 p-6 transition-all duration-300 hover:border-purple-900">
            <p>
                {job.startDate.toLocaleDateString()} - {displayDate}
            </p>

            <div className="flex flex-col gap-4">
                <div>
                    <h2 className="font-bold">{job.title}</h2>

                    <h3 className="text-white/70">{job.workPlace}</h3>
                </div>

                <p className="text-sm">{job.description}</p>

                <ul className="flex flex-row flex-wrap gap-4">
                    {job.competences.map((item) => (
                        <li className="flex rounded-2xl bg-purple-900/30 p-2 text-xs">
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </li>
    );
}
