import Header from "./Header";

export default function () {
    return (
        <section className="flex flex-col gap-6">
            <Header />

            <p className="text-justify text-white">
                Me chamo Marcelo Bromonschenkel. Sou um Desenvolvedor Full-stack
                na Tiplan, atualmente trabalhando na equipe do Siarmnet (Sistema
                Integrado de Arrecadação Municipal).
                <br />
                Adoro criar projetos pessoais para testar novas ideias e
                aprender coisas novas. Quando não estou programando ou lendo
                sobre ciência, você me encontra rolando os dados em uma boa
                campanha de RPG de mesa.
            </p>
        </section>
    );
}
