import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router";


export default function Home() {
    const features = [
        {
            title: "Chatbot",
            description: "Converse com IA para aprender e revisar conteúdos.",
            action: "Explorar",
        },
        {
            title: "Notas",
            description: "Crie e organize suas anotações de forma eficiente.",
            action: "Explorar",
        },
        {
            title: "Flash Cards",
            description: "Memorize conceitos importantes de forma divertida.",
            action: "Explorar",
        },
    ];

    return (
        <main className="min-h-screen flex flex-col">
            <div className="flex-1 container mx-auto px-4 py-8">
                <section className="text-center my-12">
                    <h2 className="text-4xl font-bold mb-4">Bem-vindo ao Recapeps-Web</h2>
                    <p className="text-lg text-muted-foreground mb-6">
                        Sua plataforma para organização de conhecimento e estudos.
                    </p>
                    <Link to="/login">
                        <Button className="px-6 py-3">Começar Agora</Button>
                    </Link>
                </section>
                <section id="features" className="my-12">
                    <h3 className="text-3xl font-bold text-center mb-6">Funcionalidades</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {features.map((feature, index) => (
                            <Card key={index}>
                                <CardHeader>
                                    <CardTitle>{feature.title}</CardTitle>
                                    <CardDescription>{feature.description}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Button variant="outline">{feature.action}</Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}
