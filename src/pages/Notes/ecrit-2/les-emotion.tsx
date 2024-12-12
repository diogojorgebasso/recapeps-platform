import { ReactNode } from "react";

const Section = ({ title, children, bgColor }: { title: string; children: ReactNode; bgColor: string }) => {
    return (
        <section className="p-4 rounded-lg shadow-md mb-8" id={title}>
            <h2 className={`${bgColor} text-xl font-bold mb-4 p-2 rounded`}>{title}</h2>
            <div className="text-gray-700 space-y-4">{children}</div>
        </section>
    );
};

export default function LesEmotions() {
    return (
        <div>
            {/* Header Section */}
            <header className="bg-gradient-to-r from-purple-500 to-red-400 text-white p-6 flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold">Les Émotions</h1>
                    <p className="mt-1"><span className="underline">Sujet</span> : La place des émotions en EPS</p>
                    <p>ITEM : Comprendre, s’exprimer et apprendre à transmettre</p>
                </div>
            </header>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto mt-8 space-y-12">
                {/* Section 1: Accroches */}
                <Section title="I. Accroches" bgColor="bg-blue-100">
                    <p>
                        « Le professeur ne tient pas suffisamment compte des émotions véhiculées et générées par les APSA »
                        <span className="italic">(Gagnaire & Lavie, 2005)</span>
                    </p>
                    <p>
                        « Rares sont les disciplines qui sollicitent une telle implication émotionnelle : c’est là un phénomène que les enseignants ne peuvent ignorer »
                        <span className="italic">(Gagnaire & Lavie, 2005)</span>
                    </p>
                </Section>

                <Section title="II. Définitions" bgColor="bg-blue-200">
                    <p className="text-pink-600">
                        « État affectif multidimensionnel qui s’accompagne de manifestations physiologiques, cognitives, expressives et subjectives. »
                        <span className="block italic">(Christophe, Les émotions, 1998)</span>
                    </p>

                    <p>
                        « Ces mouvements de l’âme sont souvent déclenchés par des événements ou des objets qui
                        affectent l’âme sans que la personne en question les ait recherchés. Ils ne sont pas directement
                        soumis à la volonté ; ils s’imposent : des impulsions, des actions, des pensées, des sentiments. »
                        <span className="italic">Tcherkassof, Nico, Frijda, Les émotions : une conception relationnelle, 2014</span>
                    </p>
                    <p>
                        « La notion d’« émotion » sert à indiquer des réponses complexes (...), c’est-à-dire composées
                        de plusieurs réponses, qu’elles soient physiologiques, motrices, cognitives, affectives et/ou
                        ressenties (« syndrome multi-componentiel »)”.
                        <span className="italic">Tcherkassof, Nico, Frijda, Les émotions : une
                            conception relationnelle, 2014</span>
                    </p>
                    <p>
                        « L’évaluation de la pertinence d’un événement vis-à-vis des intérêts du sujet constitue l’aspect
                        probablement le plus central de l’émotion »
                        <span className="italic">(Frijda, 2007).</span>
                    </p>
                </Section>

                <Section title="III. Ce qu’en disent les auteurs" bgColor="bg-blue-300">
                    <h3 className="font-bold text-lg">Damasio, 2017</h3>
                    <ul className="list-disc list-inside">
                        <li>
                            Émotions primaires ou universelles : réactions fondamentales comme la peur ou la joie.
                        </li>
                        <li>
                            Émotions secondaires ou sociales : influencées par notre environnement social (ex : jalousie, culpabilité).
                        </li>
                        <li>
                            Émotions d’arrière-plan : états émotionnels influencés par des facteurs internes (ex : fatigue, cycle biologique).
                        </li>
                    </ul>
                    <p>
                        « Les émotions sont un processus indispensable à la prise de décision. »
                        <span className="block italic">(Damasio, 1995)</span>
                    </p>
                </Section>

                <Section title="IV. Ce qu’en disent les textes officiels" bgColor="bg-blue-400">
                    <p>
                        « L’EPS apprend aux élèves à s’exprimer en utilisant des codes non verbaux, gestuels et corporels originaux. »
                        <span className="block italic">(Cycle 3, BO spécial n°11, 2015)</span>
                    </p>
                    <p>
                        « Les émotions jouent un rôle essentiel pour maintenir l’engagement dans les apprentissages. »
                        <span className="block italic">(Cycle 4, BO 2015)</span>
                    </p>
                </Section>

                {/* Section 5: Bloc de définition */}
                <Section title="Bloc de définition" bgColor="bg-blue-500">
                    <p>
                        « Les émotions sont un état affectif multidimensionnel (...). L’élève les ressent et les exprime dans ses comportements et prises de décisions. »
                        <span className="block italic">(V. Christophe, 1998)</span>
                    </p>
                </Section>

                {/* Section 6: Bloc argumentaire */}
                <Section title="Bloc argumentaire : Empathie" bgColor="bg-blue-600">
                    <p>
                        « Les élèves ne sont pas fraternels, ils ont des relations difficiles et ont du mal à se comprendre. »
                        <span className="block italic">(J. Méard, 2015)</span>
                    </p>
                    <p>
                        Une démarche empathique par le corps favorise la compréhension et la bienveillance envers autrui, tout en développant l’intelligence relationnelle.
                        <span className="block italic">(Goleman, 2009)</span>
                    </p>
                    <p>
                        Exemple pratique : Utilisation du « jeu des mousquetaires » pour renforcer les capacités d’observation, de coopération, et de bienveillance dans une équipe.
                    </p>
                </Section>
            </div>
        </div>
    );
}
