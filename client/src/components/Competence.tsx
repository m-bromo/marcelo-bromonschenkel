interface props {
    competence: string;
}

export default function ({ competence }: props) {
    return (
        <div className="flex items-center border-8">
            <p>{competence}</p>
        </div>
    );
}
