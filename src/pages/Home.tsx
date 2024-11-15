import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col">


            {/* Corpo principal */}
            <main className="flex-1 container mx-auto px-4 py-8">
                {/* Seção de Apresentação */}
                <section className="text-center my-12">
                    <h2 className="text-4xl font-bold mb-4">Bem-vindo ao Recapeps-Web</h2>
                    <p className="text-lg text-muted-foreground mb-6">
                        Sua plataforma para organização de conhecimento e estudos.
                    </p>
                    <Link to="/login">
                        <Button className="px-6 py-3">Começar Agora</Button>
                    </Link>
                </section>

                {/* Seção de Funcionalidades */}
                <section id="features" className="my-12">
                    <h3 className="text-3xl font-bold text-center mb-6">Funcionalidades</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Chatbot</CardTitle>
                                <CardDescription>Converse com IA para aprender e revisar conteúdos.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Button variant="outline">Explorar</Button>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Notas</CardTitle>
                                <CardDescription>Crie e organize suas anotações de forma eficiente.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Button variant="outline">Explorar</Button>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Flash Cards</CardTitle>
                                <CardDescription>Memorize conceitos importantes de forma divertida.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Button variant="outline">Explorar</Button>
                            </CardContent>
                        </Card>
                    </div>
                </section>
            </main>

            {/* Rodapé */}
            <footer id="contact" className="w-full bg-secondary text-white py-4">
                <div className="container mx-auto text-center">
                    <p>&copy; {new Date().getFullYear()} Recapeps-Web. Todos os direitos reservados.</p>
                    <a href="mailto:contato@recapeps.com" className="hover:underline">contato@recapeps.com</a>
                </div>
            </footer>
        </div>
    );
};

