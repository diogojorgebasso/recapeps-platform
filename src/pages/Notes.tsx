import { ReactNode } from "react";

export default function Notes() {
    return (
        <div>
            <header className="bg-gradient-to-r from-blue-400 to-red-400 text-white p-6 flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold">Mixité sexuée</h1>
                    <p className="mt-1"><span className="underline">Epreuve</span> : Écrit 1</p>
                    <p>ITEM : Transmettre et adapter</p>
                </div>
                <div className="h-20 w-20 rounded-full overflow-hidden">

                </div>
            </header>
            <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Plan</h2>
                <table className="w-full border-collapse border border-gray-300 text-left">
                    <thead>
                        <tr>
                            <a href="#Accroches">
                                <th className="border border-gray-300 px-4 py-2">Accroches</th>
                            </a>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">Définitions</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">Problématique</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">Plan</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">Plan détaillé et contenu</td>
                        </tr>
                    </tbody>
                </table>
                <div className="mt-6 ml-4">
                    <p>Legend:</p>
                    <ul className="text-sm text-gray-600 list-disc">
                        <li className="text-fuchsia-600">Acteur</li>
                        <li className="text-indigo-600">Contexte</li>
                        <li className="text-red-500">Référence officielle (Instruction officielle, Programme...)</li>
                        <li className="text-pink-600">Citation</li>
                        <li className="text-yellow-500">Illustration</li>
                    </ul>
                </div>
            </div>
            <div className="max-w-4xl mx-auto mt-8 space-y-12">
                <Section title="Accroches" bgColor="bg-blue-100">
                    <p className="mb-2">
                        « Tant que l'école restera indifférente aux différences des élèves, beaucoup d'élèves resteront
                        indifférents à l'école ».
                        <span className="block italic"> (L. Legrand, Pour un collège démocratique, La documentation française, 1982)</span>
                    </p>
                    <p className="mb-2">
                        « Les écoles, les collèges et les lycées contribuent à favoriser la mixité et l’égalité entre les hommes et les
                        femmes »
                        <span className="block italic">(Article 5 de la loi Fillon du 23 mai 2008)</span>
                    </p>
                    <p>
                        “La poursuite de la promotion de l’égalité entre les filles et les garçons sera également au cœur de notre
                        action.”
                        <span className="block italic">(Circulaire de rentrée 2024, “Ne laisser aucun élève au bord du chemin”).</span>
                    </p>
                </Section>
                <Section title="II. Définitions" bgColor="bg-blue-200">
                    <h3 className="font-bold text-lg mt-4">Mixité</h3>
                    <p className="text-pink-600">
                        « Fait de dispenser un enseignement commun à un groupe de garçons et de filles dans le but de leur permettre
                        de s’approprier une culture commune tout en reconnaissant la place et les caractéristiques de chacun »
                        <span className="block italic">(Lamotte, PUF 2005).</span>
                    </p>
                    <p>
                        « Le fait d’éduquer les filles et les garçons ensemble »
                        <span className="block italic">(Thierry Terret, Cogérino, Pratiques et représentations de la mixité en EPS, Paris, Editions Revue EPS de 2006).</span>
                    </p>
                    <h3 className="font-bold text-lg mt-4">Genre</h3>
                    <p>
                        « Ensemble des formes d’expression sociales de la féminité et de la masculinité et l’ensemble des signes, des
                        symboles qui dénotent une appartenance identitaire et fondent un type de relation entre les sexes ou au sein de
                        chacun des sexes »
                        <span className="block italic">(JSM, Sports et genre, Vol 1, 2005).</span>
                    </p>
                    <p>
                        Renvoie aux rôles qui y sont associés, déterminés
                        <span className="block italic">(Bourdieu).</span>
                    </p>
                </Section>
            </div>
        </div >
    )
}
const Section = ({ title, children, bgColor }: { title: string, children: ReactNode, bgColor: string }) => {
    return (
        <section className="p-6 rounded-lg shadow-md" id={title}>
            <h2 className={`${bgColor} text-xl font-bold mb-4`}>{title}</h2>
            <div className="text-gray-700">{children}</div>
        </section>
    );
};