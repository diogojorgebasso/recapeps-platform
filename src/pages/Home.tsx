import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router";
export default function Home() {
    const features = [
        {
            title: "Chatbot",
            description: "Discutez avec une IA pour apprendre et réviser des contenus.",
            action: "Explorer",
        },
        {
            title: "Notes",
            description: "Créez et organisez vos notes de manière efficace.",
            action: "Explorer",
        },
        {
            title: "Flashcards",
            description: "Mémorisez des concepts importants de manière ludique.",
            action: "Explorer",
        },
        {
            title: "Quizz",
            description: "Testez vos connaissances avec des quiz personnalisés.",
            action: "Commencer",
        },

    ];

    return (
        <main className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            <div className="flex-1 container mx-auto px-4 py-8">
                {/* Section d'introduction */}
                <section className="text-center my-12">
                    <h2 className="text-4xl font-bold mb-4">Bienvenue sur Recapeps!</h2>
                    <p className="text-lg text-muted-foreground mb-6">
                        Votre plateforme pour organiser vos connaissances et vos études.
                    </p>
                    <Button asChild className="px-6 py-3">
                        <Link to="/login">
                            Commencer Maintenant
                        </Link>
                    </Button>
                </section>

                {/* Section des fonctionnalités */}
                <section id="features" className="my-12">
                    <h3 className="text-3xl font-bold text-center mb-6">Fonctionnalités</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {features.map((feature, index) => (
                            <Card key={index} className="shadow-md hover:shadow-lg transition-shadow duration-300">
                                <CardHeader>
                                    <CardTitle>{feature.title}</CardTitle>
                                    <CardDescription>{feature.description}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Link to={`/${feature.title}`}>
                                        <Button variant="outline">{feature.action}</Button>
                                    </Link>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* Section supplémentaire */}
                <section id="about" className="my-12">
                    <h3 className="text-3xl font-bold text-center mb-6">Pourquoi Recapeps-Web ?</h3>
                    <p className="text-center text-lg max-w-2xl mx-auto">
                        Recapeps-Web vous offre des outils modernes pour maximiser votre apprentissage.
                        Explorez une plateforme intuitive, personnalisable et conçue pour répondre à vos besoins éducatifs.
                    </p>
                </section>

                {/* Section Appel à l'action */}
                <section id="cta" className="my-12 bg-blue-500 text-white py-8 rounded-lg">
                    <div className="text-center">
                        <h3 className="text-3xl font-bold mb-4">Rejoignez notre communauté dès aujourd'hui !</h3>
                        <Link to="/register">
                            <Button variant="default" className="px-6 py-3 bg-white text-blue-500 hover:bg-gray-100">
                                S'inscrire
                            </Button>
                        </Link>
                    </div>
                </section>
            </div>
        </main>
    );
}
