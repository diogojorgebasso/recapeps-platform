
export default function Support() {
    return (
        <div className="bg-gray-50 min-h-screen text-gray-800">

            <main className="container mx-auto px-6 py-12">
                <section className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-semibold mb-4">Comment pouvons-nous vous aider ?</h2>
                    <p className="text-gray-600 mb-8">
                        Si vous avez des questions, des problèmes ou besoin d’assistance, n’hésitez pas à nous contacter.
                        Nous sommes là pour vous aider !
                    </p>
                </section>

                <section className="grid gap-8 sm:grid-cols-2">
                    {/* Contact Développeur */}
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <h3 className="text-xl font-bold mb-2">Support Développeur</h3>
                        <p className="text-gray-600 mb-4">
                            Pour des questions techniques ou liées au développement, contactez Diogo.
                        </p>
                        <a
                            href="mailto:diogo@example.com"
                            className="text-blue-600 font-medium hover:underline"
                        >
                            diogo@example.com
                        </a>
                    </div>

                    {/* Contact Commercial */}
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <h3 className="text-xl font-bold mb-2">Support Commercial</h3>
                        <p className="text-gray-600 mb-4">
                            Pour des demandes commerciales, contactez Corentin.
                        </p>
                        <a
                            href="mailto:corentin@example.com"
                            className="text-blue-600 font-medium hover:underline"
                        >
                            corentin@example.com
                        </a>
                    </div>
                </section>
            </main>
        </div>
    );
};

