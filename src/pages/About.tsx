export default function About() {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 flex items-center justify-center">
            <div className="max-w-4xl mx-auto p-8 bg-white dark:bg-gray-900 rounded-lg shadow-xl transition-all duration-300">
                <h1 className="text-4xl font-extrabold text-center mb-8 text-gray-800 dark:text-gray-100">
                    À Propos de Nous
                </h1>
                <p className="text-lg leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
                    Bienvenue sur notre plateforme ! Nous sommes passionnés par l'idée
                    d'aider les gens à atteindre leurs objectifs grâce à des outils
                    innovants et accessibles. Notre priorité est de créer des solutions
                    simples et intuitives qui rendent l'apprentissage et l'organisation
                    plus efficaces.
                </p>
                <h2 className="text-3xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
                    Notre Mission
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
                    Notre mission est de fournir une plateforme qui permet aux individus
                    d'apprendre efficacement, d'organiser leurs idées et d'atteindre le
                    succès dans leurs objectifs personnels et professionnels.
                </p>
                <h2 className="text-3xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
                    Pourquoi Nous Choisir ?
                </h2>
                <ul className="list-disc pl-6 space-y-4 text-gray-700 dark:text-gray-300">
                    <li>
                        <span className="font-medium text-gray-800 dark:text-gray-100">
                            Simplicité d'Utilisation :
                        </span>{" "}
                        Nos outils sont conçus pour être simples et faciles à utiliser.
                    </li>
                    <li>
                        <span className="font-medium text-gray-800 dark:text-gray-100">
                            Technologie Avancée :
                        </span>{" "}
                        Nous utilisons les meilleures pratiques et technologies pour
                        garantir l'efficacité.
                    </li>
                    <li>
                        <span className="font-medium text-gray-800 dark:text-gray-100">
                            Support Client :
                        </span>{" "}
                        Nous sommes là pour vous accompagner à chaque étape de votre
                        parcours.
                    </li>
                </ul>
                <div className="mt-10 text-center">
                    <a
                        href="/contact"
                        className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium py-3 px-6 rounded-lg shadow-lg hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-700 transition-all duration-300"
                    >
                        Contactez-Nous
                    </a>
                </div>
            </div>
        </div>
    );
}
