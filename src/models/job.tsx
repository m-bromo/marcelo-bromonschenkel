export type Job = {
    startDate: Date;
    endDate: Date | null;
    title: string;
    workPlace: string;
    description: string;
    competences: string[];
};
